import React from 'react'
import {Row, Col} from 'antd';
import {CountDown} from '../..'
import './NextMeetUp.css'

let NextMeetUp = ({duration}) => (
  <div className="home-page" id="next-meetup">
    <hero>
      <h1>Next MeetUp</h1>
    </hero>
    <content>
      <Row className="count-down" gutter={24}>
        <Col className="entry" xs={24} sm={12} md={6}>
          <span>{ duration.days() }</span>
          <div className="subject">Days</div>
        </Col>
        <Col className="entry" xs={24} sm={12} md={6}>
          <span>{ duration.hours() - duration.days() * 24 }</span>
          <div className="subject">Hours</div>
        </Col>
        <Col className="entry" xs={24} sm={12} md={6}>
          <span>{ duration.minutes() - duration.hours() * 60 }</span>
          <div className="subject">Minutes</div>
        </Col>
        <Col className="entry" xs={24} sm={12} md={6}>
          <span>{ duration.seconds() - duration.minutes() * 60 }</span>
          <div className="subject">Seconds</div>
        </Col>
      </Row>
    </content>
  </div>
)

export default CountDown(new Date(2017,7,4,16))(NextMeetUp)
