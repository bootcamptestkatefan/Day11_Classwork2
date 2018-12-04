import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterGroup extends Component {
  state ={
    newArray: new Array(this.props.lengthOfArray).fill(0),
    sum: 0,
    counterSum: 0
  }
  updateSum = (delta) => {
    this.setState ({sum: this.state.sum + delta})
  }
  addOneCounter = () => {
    this.setState({
      newArray: new Array(parseInt(this.refs.name.value)).fill(0),
      counterSum: 0
    })
    return this.state.newArray.map(()=> <Counter/>)
  }
  render() {
    return (
      <div> 
        <div>
          {this.state.newArray.map(id => <Counter 
          onUpdate={this.updateSum}
          counterNum={this.state.count}
          />
          )}
          sum: {this.state.sum}
        </div>
        <div>
        <input type="text" ref="name"></input>
          <button onClick = {this.addOneCounter}>addCounters</button>
        </div>
      </div>
    )
  }
}
