import React, { Component } from 'react'

export default class Counter extends Component {
  //save variable in the same class
  //if i would like to change state, i need to use "this.setState"

  //below are functions
  //if I need to call them, please use this.function(variables), if no variable, can just use this.function()
  //contains sth like html => namely jsx
  //can use state/function of the same class, please place them inside {}
  render() {
    return (
      <div>
        <button onClick = {()=>this.props.onIncrease(this.props.id)}>+</button>
        <span>{this.props.number}</span>
        <button onClick = {()=>this.props.onDecrease(this.props.id)}>-</button>
      </div>
    )
  }
}
