import React, { Component } from 'react'

export default class ClassIntervalCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterValue: 0,
    }
  }

  tick = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }

  componentDidMount() {
    console.log('Mounting Value')
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('Unmounting Value')
    clearInterval(this.interval)
  }

  render() {
    return <div>Class Counter :-{this.state.counterValue}</div>
  }
}
