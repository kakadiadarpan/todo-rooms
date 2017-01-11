import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoRoom, deleteTodoRoom } from '../../actions/TodoRoomsActions';
import { clearTodos } from '../../actions/TodoActions';
import TodoRooms from '../../components/TodoRoom/TodoRooms';
import TodoHeader from '../../components/TodoRoom/TodoHeader';

class TodoRoomsContainer extends Component {
  render() {
    return (
      <div>
        <header>
          <TodoHeader title="Todo" showMenuIconButton={false} showBackButton={false} showAddButton={true}/>
        </header>
        <section className='todo-room-container'>
          <TodoRooms {...this.props}/>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ todoRooms }) => ({ todoRooms });

export default connect(mapStateToProps, { addTodoRoom, deleteTodoRoom, clearTodos })(TodoRoomsContainer);