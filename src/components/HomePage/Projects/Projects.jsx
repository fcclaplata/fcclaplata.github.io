import React from 'react'
import ProjectList from './ProjectList'
import './Projects.css'

export default() => (
  <div className="home-page" id="projects">
    <hero>
      <h1>Projects</h1>
      The things whe do with them
    </hero>
    <content>
      <ProjectList/>
    </content>
  </div>
)