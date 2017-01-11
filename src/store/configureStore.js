import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise';
import reducer from '../reducers/RootReducer';
import todoStorageSaga from '../middleware/sagas';
import { fetchCachedTodos } from '../actions/TodoActions';
import { fetchCachedTodoRooms } from '../actions/TodoRoomsActions';
import { firebaseConfig, getTodoRoomsDB, getTodosDB } from '../utilities/firebase';
import { browserHistory } from 'react-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const finalCreateStore = composeEnhancers(
    applyMiddleware(sagaMiddleware, promise)
    //window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  sagaMiddleware.run(todoStorageSaga)

  store.dispatch(fetchCachedTodoRooms());
  store.dispatch(fetchCachedTodos());
  //delay until auth completes
  firebaseConfig.auth().onAuthStateChanged(user => {
    if (user) {
      getTodoRoomsDB()
        .then(response => {
          if (response) {
            store.dispatch(fetchCachedTodoRooms());
          }
        });
      getTodosDB()
        .then(response => {
          if (response) {
            store.dispatch(fetchCachedTodos());
          }
        });
    }
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/RootReducer', () => {
      const nextReducer = require('../reducers/RootReducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
