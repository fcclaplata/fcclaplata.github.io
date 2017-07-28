import React, { PureComponent } from "react";
import { Row, Col } from "antd";
import { query } from "../../../lib/github";
import Project from "./Project";
import projects from "./projects.json";

const mapProject = ({ name, url, description, languages }) => ({ name, url, description, languages: languages.edges.map( ({ node }) => ({ ...node }) ) });

class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () =>
    query(`query {
       organization(login: "fcclaplata") {
         pinnedRepositories(first:6) { 
           edges { 
            node { 
              name,
              url,
              description,
              languages(first: 5) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        } 
      }
    }`)
      .then(response => response.data)
      .then(({ data }) => data.organization.pinnedRepositories.edges)
      .then(nodes =>
        this.setState({
          projects: nodes.map(({ node }) => mapProject(node))
        })
      )
      .catch(e => console.error(e));

  getChildern = () =>
    this.state.projects &&
    this.state.projects.map(({ name, description, url, languages }, key) =>
      <Col xs={24} sm={12} md={8} lg={6} key={key}>
        <Project title={name} body={description} languages={languages} repo={url} key={key} />
      </Col>
    );

  render = () =>
    <Row
      type="flex"
      align="middle"
      justify="space-around"
      gutter={24}
      className="project-list"
    >
      {this.getChildern()}
    </Row>;
}

export default ProjectList;
