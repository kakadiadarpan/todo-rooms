import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import TodoRoomsReducer from './TodoRoomsReducer';

const rootReducer = combineReducers({
  todos: TodoReducer,
  todoRooms: TodoRoomsReducer
});

export default rootReducer;
