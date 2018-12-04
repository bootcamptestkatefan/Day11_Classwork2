import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterGroup extends Component {
  state ={
    newArray: new Array(this.props.lengthOfArray).fill(0),
    sum: 0, 
    updateInputValue
  }
  updateSum = (delta) => {
    this.setState ({sum: this.state.sum + delta})
  }
  addOneCounter = () => {
    this.state.newArray.map((inputValue) => <Counter onUpdate={this.updateSum}/>)
  }
  render() {
    return (
      <div>
        sum: {this.state.sum}
      </div>
      <div>
        <button onClick = {this.addOneCounter}></button>
        <input type="text" inputValue={this.state.inputValue} onChange={this.updateInputValue}></input>
      </div>
    )
  }
}
