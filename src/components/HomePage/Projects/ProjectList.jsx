import React, { PureComponent } from "react"
import { Row, Col } from "antd"
import Project from "./Project"
import projects from "./projects.json"

class ProjectList extends PureComponent {
  getChildern = () =>
    projects.map(({ title, body, image, repo }, key) =>
      <Col xs={24} sm={12} md={8} lg={6} key={key} >
        <Project title={title} body={body} image={image} repo={repo} key={key} />
      </Col>
    )

  render = () =>
    <Row type="flex" align="middle" justify="space-around" gutter={24} className="project-list">
      {this.getChildern()}
    </Row>
}

export default ProjectList;
