import React from 'react'
import { Anchor } from 'antd';

import {CountDown} from '..'
import {Banner, Technologies, Architecture} from '.'
import './HomePage.css'

const { Link } = Anchor;

let Days = ({duration}) => (
  <div>
    {duration.weeks()}
    weeks, {duration.days() - duration.weeks() * 7}
    Days, {duration.hours() - duration.days() * 24}
    hours, {duration.minutes() - duration.hours() * 60}
    minutes, {duration.seconds() - duration.minutes() * 60}
    seconds
  </div>
)
Days = CountDown(new Date(2017, 8, 4))(Days)

const HomePage = () => (
  <home-page>
    <Anchor className="anchor" >
      <Link href="#banner" title="Home"/>
      <Link href="#technologies" title="What whe use"/>
      <Link href="#architecture" title="How we use it"/>
    </Anchor>
    <Banner/>
    <Technologies/>
    <Architecture/>
  </home-page>
)

export default HomePage