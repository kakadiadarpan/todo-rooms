import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import TodoContainer from '../containers/Todo/TodoContainer';

class TodoPage extends Component {
  render() {
    return (
      <Grid bsClass="">
        <div className="container-fluid">
          <TodoContainer {...this.props} />
        </div>
      </Grid>
    );
  }
}
export default TodoPage;
