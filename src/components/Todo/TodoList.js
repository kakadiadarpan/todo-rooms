import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import classNames from 'classnames';
import DeleteButton from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  markTodo = (item, e) => {
    this.props.markTodo(item.id, !item.completed);
  }

  removeTodo = (item, e) => {
    e.stopPropagation();
    this.props.deleteTodo(item.id);
  }

  render() {
    let todos = (this.props && this.props.todos) || [],
      roomId = this.props.params.roomId;
    todos = todos.slice(0).filter(function (o) { return (o.rId === roomId); });
    todos = todos.sort(function (o) { return o.ts; });
    return (
      <List className={classNames({ 'todo-lists-container': true })}>
        {todos.map((item, i) => (
          <ListItem key={item.id} className={classNames({ 'todo-item-container': true })} onClick={this.markTodo.bind(this, item)}>
            <TodoItem id={item.id} title={item.title} completed={item.completed} />
            <IconButton tooltip={"Delete"} tooltipPosition="bottom-right" touch={true} onClick={this.removeTodo.bind(this, item)} className={classNames({ delete: true })}><DeleteButton /></IconButton>
          </ListItem>
        ))}
      </List>
    )
  }
}