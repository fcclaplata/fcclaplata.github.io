import React from 'react'
import {Layout} from 'antd'

import {HomePage} from '..'
import icon from './icon.svg'
import './App.css'

const {Header, Content} = Layout;

const App = () => (
  <Layout>
    <Header className="header">
      <div className="logo">
        <img src={icon} alt="Free Code Camp - La Plata"/>
        La Plata
      </div>
    </Header>
    <Content><HomePage/></Content>
  </Layout>
)

export default App