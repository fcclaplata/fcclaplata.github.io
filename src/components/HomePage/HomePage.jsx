import React from 'react'
import {Anchor, Tooltip} from 'antd'
import {Banner, Technologies, Architecture, Projects} from '.'
import './HomePage.css'

const {Link} = Anchor

export default() => (
  <home-page>
    <Anchor className="anchor">
      <Tooltip title="Home" placement="left"><Link href="#banner"/></Tooltip>
      <Tooltip title="What we use" placement="left"><Link href="#technologies"/></Tooltip>
      <Tooltip title="How we use them" placement="left"><Link href="#architecture"/></Tooltip>
      <Tooltip title="Where we use them" placement="left"><Link href="#projects"/></Tooltip>
    </Anchor>
    <Banner/>
    <Technologies/>
    <Architecture/>
    <Projects/>
  </home-page>
)
