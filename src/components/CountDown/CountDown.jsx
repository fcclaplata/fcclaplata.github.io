import React, {Component} from 'react'
import Duration from 'duration-js'

const now = () => new Date()

const CountDown = limit => View => class CountDownComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      duration: null
    }
  }

  componentDidMount = () => {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  limit = () => limit
    ? new Date(limit)
    : new Date()

  tick = () => this.setState({
    duration: new Duration(this.limit() - now())
  })

  render = () => this.state.duration && (<View duration={this.state.duration}/>)
}

export default CountDown