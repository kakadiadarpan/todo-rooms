import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/TodoActions';

class TodoInput extends Component {
  componentWillMount(){
    this.setState({
      text:""
    });
  }
  handleSubmit = e => {
    const text = e.target.value.trim(),
          roomId = this.props.params.roomId;
    if (e.which === 13) {
      this.props.addTodo(text, roomId)
      this.setState({ text: '' })
    }
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div id='todo-header'>
        <TextField
          autoFocus={true}
          className='add-todo'
          hintText="What needs to be done?"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(null, {addTodo})(TodoInput)