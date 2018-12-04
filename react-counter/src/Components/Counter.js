import React, { Component } from 'react'

export default class Counter extends Component {
  //save variable in the same class
  //if i would like to change state, i need to use "this.setState"
  state = {
    number: 0 
  }
  //below are functions
  //if I need to call them, please use this.function(variables), if no variable, can just use this.function()
  addOne = () => {
    this.setState({
      number: this.state.number + 1
    })
    this.props.onUpdate(1) 
  }
  minusOne = () => {
    this.setState({
      number: this.state.number - 1
    })
    this.props.onUpdate(-1)
  }
  //contains sth like html => namely jsx
  //can use state/function of the same class, please place them inside {}
  render() {
    return (
      <div>
        <button onClick = {this.addOne}>+</button>
        <span>{this.state.number}</span>
        <button onClick = {this.minusOne}>-</button>
      </div>
    )
  }
}
