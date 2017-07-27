import React from 'react'
import QueueAnim from 'rc-queue-anim';

import './Banner.css'

export default() => (
  <div className="banner home-banner" id="banner">
    <div className="banner-text">
      <QueueAnim delay={700} className="queue-simple" animConfig={{ translateY: [0, 50], opacity: [1, 0] }} >
        <h1 key="a">Free Code Camp</h1>
        <h2 key="b">La Plata</h2>
        <p key="c">A Place to Code</p>
      </QueueAnim>
    </div>
  </div>
)