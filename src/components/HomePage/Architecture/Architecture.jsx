import React from "react";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import architectures from "./architectures.json";
import "./Architecture.css";

const Architecture = ({ icon, title, body, key }) => (
  <div className="architecture">
    <i className={icon} />
    <div className="text">
      <h3>
        {title}
      </h3>
      <ReactMarkdown source={body.join(`\n`)} />
    </div>
  </div>
)

export default () =>
  <div className="home-page" id="architecture">
    <hero>
      <h1>Architecture</h1>
      <p>The way we use them</p>
    </hero>
    <content>
      <Row gutter={24} type="flex" align="top" justify="strech" className="arch-list">
        {architectures.map(({ icon, title, body }, key) =>
          <Col xs={24} sm={12} lg={8} key={key}>
            <Architecture icon={icon} title={title} body={body} />
          </Col>
        )}
      </Row>
    </content>
  </div>;
