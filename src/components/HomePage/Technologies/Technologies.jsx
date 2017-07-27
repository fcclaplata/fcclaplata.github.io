import React from 'react'
import { Row, Col } from 'antd';

import './Technologies.css'

export default () => (
   <div className="home-page" id="technologies">
       <hero>
           <h1>Technologies</h1>
           <p>The things we use</p>
       </hero>
       <content>
          <Row gutter={24} className="tech-list">
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-react-original"></i>
                  <h3>React</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-codeigniter-plain"></i>
                  <h3>Firebase</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-docker-plain"></i>
                  <h3>Docker</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-amazonwebservices-original"></i>
                  <h3>AWS</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-nginx-original"></i>
                  <h3>Ngnix</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-sass-original"></i>
                  <h3>Sass</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="fa fa-github"></i>
                  <h3>Github</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-webpack-plain"></i>
                  <h3>Webpack</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-mongodb-plain"></i>
                  <h3>Mongodb</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-postgresql-plain"></i>
                  <h3>Postgresql</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="fa fa-globe"></i>
                  <h3>Tensorflow</h3>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                  <i className="devicon-d3js-plain"></i>
                  <h3>D3</h3>
              </Col>
          </Row>
       </content>
   </div>
)