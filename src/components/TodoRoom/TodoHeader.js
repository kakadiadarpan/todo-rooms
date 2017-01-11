import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import AddButton from 'material-ui/svg-icons/content/add';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import { browserHistory } from 'react-router';

import AddTodoRoom from './AddTodoRoom'

export default class TodoHeader extends Component{
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
    return (
     <Row className="show-grid">
        <Col xs={12} className="header-wrapper">
          <AppBar
          title={this.props.title}
          titleStyle={{'textAlign':'center'}}
          iconElementLeft={this.props.showBackButton?(<IconButton tooltip={"Back"} touch={true} tooltipPosition="bottom-right" onClick={browserHistory.goBack}><BackArrow/></IconButton>):(<span style={{width:'48px', display:'block'}}></span>)}
          iconElementRight={this.props.showAddButton?(<IconButton tooltip={"Add Room"} touch={true} tooltipPosition="bottom-left" onClick={this.handleOpen}><AddButton/></IconButton>):(<span style={{width:'48px', display:'block'}}></span>)}
          />
          <AddTodoRoom open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose}/>
        </Col>
      </Row>
    );
  }
}