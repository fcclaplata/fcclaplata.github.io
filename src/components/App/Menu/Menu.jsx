import React from 'react'
import {Menu} from 'antd'

const MainMenu = () => (
  <Menu
    theme="light"
    mode="horizontal"
    style={{
    lineHeight: '63px',
    width: 'initial',
    float: 'right'
  }}>
    <Menu.Item key="mail">
      Navigation One
    </Menu.Item>
    <Menu.Item key="app">
      Navigation Two
    </Menu.Item>
  </Menu>
)

export default MainMenu