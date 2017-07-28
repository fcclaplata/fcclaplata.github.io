import React from 'react'
import {Layout} from 'antd'
import FontAwesome from 'react-fontawesome'

import {HomePage} from '..'
import './App.css'

const {Header, Content} = Layout;

const App = () => (
  <Layout>
    <Header className="header">
      <div className="logo">
        <FontAwesome size="2x" name="free-code-camp"/>
        La Plata
      </div>
    </Header>
    <Content><HomePage/></Content>
  </Layout>
)

export default App