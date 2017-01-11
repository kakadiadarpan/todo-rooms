import React, { Component } from 'react';
import Card from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import { Row, Col } from 'react-bootstrap';
import { authenticateUser } from '../../utilities/firebase';

const styles = {
  cardStyle: {
    maxWidth: '268px',
    height: '260px',
    margin: '10% auto'
  }
};

export default class Login extends Component {

  render() {
    return (
      <Row className="show-grid">
        <Col xs={12} className="header-wrapper">
          <Card style={styles.cardStyle}>
            <AppBar title="Todo" titleStyle={{'textAlign':'center'}} showMenuIconButton={false} />
            <button className="login-btn" type="button" onClick={authenticateUser}>Login via google</button>
          </Card>
        </Col>
      </Row>
    );
  }
}