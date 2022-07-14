import React, { Component } from 'react'

export default class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterValue: 0,
    }
  }

  // Called Only once
  componentDidMount() {
    console.log('Mount Value')
  }

  // Called After Every Render
  componentDidUpdate() {
    console.log('Called only after Render')
  }

  // Called After Every Render with condition
  //   componentDidUpdate(prevProps, prevState) {
  //     console.log('Update Called')
  //     if (prevState.counterValue !== this.state.counterValue) {
  //       document.title = `You Clicked ${this.state.counterValue} times`
  //     }
  //   }

  // Component Will Unmount

  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <button
          onClick={() =>
            this.setState({ counterValue: this.state.counterValue + 1 })
          }
        >
          Click Me
        </button>
        <h1>Total Count is : {this.state.counterValue}</h1>
      </div>
    )
  }
}
