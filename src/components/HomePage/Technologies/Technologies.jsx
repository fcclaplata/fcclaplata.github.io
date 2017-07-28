import React from "react";
import { Row, Col } from "antd";

import technologies from "./technologies.json";
import "./Technologies.css";

const Technology = ({ icon, title, key, url }) =>
  <a target={title} href={url}>
    <Col className="item" key={key} xs={12} md={8} lg={6}>
      <i className={icon} />
      <h3>
        {title}
      </h3>
    </Col>
  </a>;

export default () =>
  <div className="home-page" id="technologies">
    <hero>
      <h1>Technologies</h1>
      <p>The things we use</p>
    </hero>
    <content key="1">
      <Row gutter={24} className="tech-list">
        {technologies.map(({ icon, title, url }, key) =>
          <Technology icon={icon} title={title} key={key} url={url} />
        )}
      </Row>
    </content>
  </div>;
