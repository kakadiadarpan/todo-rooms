import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Card, CardTitle } from 'material-ui/Card';
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DeleteButton from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import classNames from 'classnames';

export default class TodoRooms extends Component {
  removeTodoRoom = (obj, e) => {
    this.props.deleteTodoRoom(obj.id);
    this.props.clearTodos(obj.id);
  }

  navigateToRoom = (obj, e) => {
    if (e.target.tagName === "svg" || e.target.tagName === "path" || e.target.tagName === "BUTTON") {
      return;
    }
    browserHistory.push('/todos/'+ obj.id+"/"+obj.name);
  };

  render() {
    let self = this,
      todoRooms = (this.props && this.props.todoRooms) || [];
    todoRooms = todoRooms.slice(0).sort(function (o) { return o.ts });
    return (
      <div className="card-holder">
        {
          todoRooms.map(function (obj, i) {
            return (
              <Col xs={6} sm={4} md={3} lg={2} className="card" key={i}>
                <Card onClick={self.navigateToRoom.bind(this,obj)}>
                <IconButton tooltip={"Delete"} tooltipPosition="bottom-right" touch={true} onClick={self.removeTodoRoom.bind(this, obj)} className={classNames({delete:true})}><DeleteButton/></IconButton>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{obj.name}</Tooltip>}>
                    <CardTitle
                      className='card-title'
                      data-title={obj.name}
                      title={obj.name}
                      titleStyle={{ lineHeight: '116px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                      >
                    </CardTitle>
                  </OverlayTrigger>
                </Card>
              </Col>
            )
          })
        }
      </div>
    )
  }
}