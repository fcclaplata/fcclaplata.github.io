import React from 'react'
import {Row, Col} from 'antd';

import './Architecture.css'

export default() => (
  <div className="home-page" id="architecture">
    <hero>
      <h1>Architecture</h1>
      <p>The way we use them</p>
    </hero>
    <content>
      <Row gutter={24} className="arch-list">
        <Col xs={24} sm={12} lg={8}>
          <i className="fa fa-share-alt"></i>
          <div className="text">
            <h3>Rest</h3>
            <p>Is a way of providing interoperability between computer systems on the
              Internet. REST-compliant Web services allow requesting systems to access and
              manipulate textual representations of Web resources using a uniform and
              predefined set of stateless operations. Other forms of Web service exist, which
              expose their own arbitrary sets of operations such as WSDL and SOAP.[1]</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <i className="fa fa-connectdevelop"></i>
          <div className="text">
            <h3>GraphQL</h3>
            <p>Is a query language for APIs and a runtime for fulfilling those queries with
              your existing data. GraphQL provides a complete and understandable description
              of the data in your API, gives clients the power to ask for exactly what they
              need and nothing more, makes it easier to evolve APIs over time, and enables
              powerful developer tools.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <i className="fa fa-mobile"></i>
          <div className="text">
            <h3>Progressive Web Apps</h3>
            <p>A new way to deliver amazing user experiences on the web, which are:</p>
            <ul>
              <li>Reliable - Load instantly and never show the downasaur, even in uncertain
                network conditions.
              </li>
              <li>Fast - Respond quickly to user interactions with silky smooth animations and
                no janky scrolling.
              </li>
              <li>Engaging - Feel like a natural app on the device, with an immersive user
                experience.
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <i className="fa fa-puzzle-piece"></i>
          <div className="text">
            <h3>Microservices</h3>
            <p>Is a variant of the service-oriented architecture (SOA) architectural style
              that structures an application as a collection of loosely coupled services. In a
              microservices architecture, services should be fine-grained and the protocols
              should be lightweight.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <i className="fa fa-recycle"></i>
          <div className="text">
            <h3>Flux</h3>
            <p>Is the application architecture that Facebook uses for building client-side
              web applications. It complements React's composable view components by utilizing
              a unidirectional data flow. It's more of a pattern rather than a formal
              framework, and you can start using Flux immediately without a lot of new code.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <i className="fa fa-cogs"></i>
          <div className="text">
            <h3>Event-driven SOA</h3>
            <p>Is a form of service-oriented architecture (SOA), combining the intelligence
              and proactiveness of event-driven architecture with the organizational
              capabilities found in service offerings</p>
          </div>
        </Col>
      </Row>
    </content>
  </div>
)