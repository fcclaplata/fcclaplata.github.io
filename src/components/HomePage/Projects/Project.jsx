import React from 'react'
import ReactMarkdown from "react-markdown";
import { Button } from 'antd'


export default({image, title, repo, body, opened, key }) => (
    <div className="project">
      <div className="info">
        <h1>{title}</h1>
        <ReactMarkdown className="body" source={body} />
        <a href={repo} target={`project-${key}`}><Button icon="github" type="primary">Repository</Button></a>
      </div>
    </div>
)