import React from 'react'
import {CountDown} from '..'
import {Banner} from '.'

let Days = ({duration}) => (
  <div>
    {duration.weeks()} weeks,
    {duration.days() - duration.weeks() * 7} Days,
    {duration.hours() - duration.days() * 24} hours,
    {duration.minutes() - duration.hours() * 60} minutes,
    {duration.seconds() - duration.minutes() * 60} seconds
  </div>
)
Days = CountDown(new Date(2017,8,4))(Days) 

const HomePage = () => (
  <home-page>
    <Banner/>
  </home-page>
)

export default HomePage