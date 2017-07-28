import React from 'react'
import {Anchor} from 'antd'
import {Banner, Technologies, Architecture, Projects} from '.'
import './HomePage.css'

const {Link} = Anchor

export default() => (
  <home-page>
    <Anchor className="anchor">
      <Link href="#banner" title="Home"/>
      <Link href="#technologies" title="What whe use"/>
      <Link href="#architecture" title="How we use them"/>
      <Link href="#projects" title="Where we use them"/>
    </Anchor>
    <Banner/>
    <Technologies/>
    <Architecture/>
    <Projects/>
  </home-page>
)
