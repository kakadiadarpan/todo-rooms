import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';
// Importing all the required pages to Router
import App from './pages/App';
import TodoPage from './pages/TodoPage';
import TodoRoomsPage from './pages/TodoRoomsPage';
import Login from './components/login'
export default (
  <Route path="/todo-rooms" component={App}>
    <Redirect from="/" to="/todo-rooms" />
    <IndexRoute component={Login} />
    <Route path="/rooms" component={TodoRoomsPage}/>
    <Route path="/todos/:roomId/:roomName" component={TodoPage}/>
  </Route>
);
