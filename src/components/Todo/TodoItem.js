import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';
import classNames from 'classnames'

export default class TodoItem extends Component {
  render() {
    let {title, completed} = this.props;
    return (
      <Checkbox
        className={classNames({"todo-item":true,"completed":completed})}
        label={title}
        checked={completed}
        labelStyle={{color:"inherit"}}
      />
    )
  }
}