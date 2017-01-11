import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import TodoRoomsContainer from '../containers/TodoRooms/TodoRoomsContainer';

class TodoRoomsPage extends Component {
  render() {
    return (
      <Grid bsClass="">
        <div className="container-fluid">
          <TodoRoomsContainer />
        </div>
      </Grid>
    );
  }
}
export default TodoRoomsPage;
