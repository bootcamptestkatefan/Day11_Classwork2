import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterGroup extends Component {
  state ={
    counterSum: 0,
    sum: 0,
    counters: new Array(this.props.lengthOfArray).fill(0).map(counter=>{
      return {
        id:new Date().getTime() + Math.random(), //want it become unique
        number:0
      }; 
    }),
    newArray: new Array(parseInt(this.props.lengthOfArray)).fill(0)
    
  }
  updateSum = (delta) => {
    this.setState ({sum: this.state.sum + delta})
  }
  addOneCounter = () => {
    this.setState({
      counters: new Array(parseInt(this.refs.name.value)).fill(0).map(counter=>{
        return {
          id:new Date().getTime() + Math.random(), //want it become unique
          number:0
        }
      }),
      counterSum: 0
    })
    return this.state.newArray.map(()=> <Counter/>)
  }
  increaseOne = (id) => {
    this.setState({
    counters: this.state.counters.map(counterItem => {
    if (counterItem.id===id){
      return {number: counterItem.number + 1, id: id};
    }
    else {
      return counterItem;
    }
    }),
    sum: this.state.sum + 1
  })
  console.log(this.state.counters)
  }
  decreaseOne = (id) => {
    this.setState({
    counters: this.state.counters.map(counterItem => {
    if (counterItem.id===id){
      return {number: counterItem.number - 1, id: id};
    }
    else {
      return counterItem;
      }
    }),
    sum: this.state.sum - 1
  })
  }
  render() {
    return (
      <div> 
        <div>
          {this.state.counters.map(countersElement => <Counter 
          onUpdate={this.updateSum}
          id={countersElement.id}
          counterNum={this.state.counters.number}
          onIncrease={this.increaseOne}
          onDecrease={this.decreaseOne}
          number={countersElement.number}
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
