import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markTodo, deleteTodo } from '../../actions/TodoActions';
import TodoInput from '../../components/Todo/TodoInput';
import TodoList from '../../components/Todo/TodoList';
import TodoHeader from '../../components/TodoRoom/TodoHeader';

class TodoContainer extends Component {
  render() {
    return (
      <div>
        <header>
          <TodoHeader title={this.props.params.roomName} showMenuIconButton={false} showBackButton={true} showAddButton={false}/>
        </header>
        <section className='todo-container'>
          <TodoInput {...this.props}/>
          <TodoList {...this.props}/>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps, { markTodo, deleteTodo })(TodoContainer)
