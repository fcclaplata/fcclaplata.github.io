import React from 'react'
import QueueAnim from 'rc-queue-anim'
import {Row, Col} from 'antd'
import {CountDown} from '../..'

import './Banner.css'

const Text = () => (
  <div className="banner-text">
    <QueueAnim
      delay={700}
      className="queue-simple"
      animConfig={{
      translateY: [
        0, 50
      ],
      opacity: [1, 0]
    }}>
      <h1 key="a">Free Code Camp</h1>
      <h2 key="b">La Plata</h2>
      <p key="c">A Place to Code</p>
    </QueueAnim>
  </div>
)

let NextMeetUp = ({duration}) => (
  <QueueAnim
    className="point-wrapper"
    delay={500}
    animConfig={{
    opacity: [
      1, 0
    ],
    translateX: [0, 50]
  }}>
    <div key="0" className="banner-text next-meetup">
      <hero>
        <h2>Next MeetUp</h2>
      </hero>
      <Row className="count-down" gutter={24}>
        <Col className="entry" xs={6}>
          <span>{duration.days()}</span>
          <div className="subject">Days</div>
        </Col>
        <Col className="entry" xs={6}>
          <span>{duration.hours() - duration.days() * 24}</span>
          <div className="subject">Hours</div>
        </Col>
        <Col className="entry" xs={6}>
          <span>{duration.minutes() - duration.hours() * 60}</span>
          <div className="subject">Minutes</div>
        </Col>
        <Col className="entry" xs={6}>
          <span>{duration.seconds() - duration.minutes() * 60}</span>
          <div className="subject">Seconds</div>
        </Col>
      </Row>
    </div>
  </QueueAnim>
)
NextMeetUp = CountDown(new Date(2017, 6, 29, 16))(NextMeetUp)

export default() => (
  <div className="home-page" id="banner">
    <Row>
      <Col xs={24} md={14}>
        <Text/>
      </Col>
      <Col xs={24} md={10}>
        <NextMeetUp/>
      </Col>
    </Row>
  </div>
)