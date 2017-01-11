import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';
import { addTodoRoom } from '../../actions/TodoRoomsActions';


class AddTodoRoom extends Component {
  componentWillMount(){
    this.setState({
      name:"",
      errorText:""
    });
  }

  handleSubmit = e => {
    const name = e.target.value.trim();
    if(!name){
      this.setState({errorText:"This field is required"});
    } else {
      this.setState({errorText:""});
      if (e.which === 13) {
        this.props.addTodoRoom(name);
        this.setState({ name: ''});
        this.props.handleClose();
      }
    }
  }

  handleClose = () => {
    this.setState({errorText:"",name:""});
    this.props.handleClose()
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />
    ];

    return (
        <Dialog
          className="dialog"
          title="Add Room"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
          contentStyle={{maxWidth:'350px', margin:"0px auto"}}
        >
        <TextField
          autoFocus={true}
          className="add-todo-room"
          hintText="Todo Room Name"
          errorText={this.state.errorText}
          handleChange={this.handleChange}
          onKeyUp={this.handleSubmit}
        />
        </Dialog>
    );
  }
}

export default connect(null, {addTodoRoom})(AddTodoRoom)