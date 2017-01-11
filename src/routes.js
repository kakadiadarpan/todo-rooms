import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Importing all the required pages to Router
import App from './pages/App';
import TodoPage from './pages/TodoPage';
import TodoRoomsPage from './pages/TodoRoomsPage';
import Login from './components/login'
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/rooms" component={TodoRoomsPage}/>
    <Route path="/todos/:roomId/:roomName" component={TodoPage}/>
  </Route>
);
