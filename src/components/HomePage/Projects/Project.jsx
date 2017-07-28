import React from "react";
import ReactMarkdown from "react-markdown";
import { Button, Tooltip } from "antd";

const icons = {
  Python: "devicon-python-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  Go: "devicon-go-plain",
  JavaScript: "devicon-javascript-plain"
};

const getIcon = lang => icons[lang] || null;

export default ({ image, title, repo, body, languages, opened, key }) =>
  <div className="project">
    <div className="info">
      <h1>
        {title}
      </h1>
      <ReactMarkdown className="body" source={body} />
      <a href={repo} target={`project-${key}`}>
        <Button icon="github" type="primary">
          Repository
        </Button>
      </a>
      <ul className="langs">
        {languages &&
          languages.map(
            ({ name, color }, key) =>
              getIcon(name) &&
              <Tooltip title={name} key={key}>
                <li>
                  <i style={{ color }} className={getIcon(name)}/>
                </li>
              </Tooltip>
          )}
      </ul>
    </div>
  </div>;
