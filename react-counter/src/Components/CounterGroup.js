import React, { Component } from 'react'
import Counter from './Counter'
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(props){
    super(props);
    this.props.dispatch({
      type: "GENERATE_COUNTERS",
      payload: this.props.lengthOfArray
    })
  }
  /*
  state ={
    sum: 0,
    counterSum: 0,
    counters: new Array(this.props.lengthOfArray).fill(0).map(counter=>{
      return {
        id:new Date().getTime() + Math.random(), //want it become unique
        number:0
      }; 
    }),   
  }
  */
  updateSum = (delta) => {
    this.props.dispatch({
      type: "SUM",
      payload: delta
    })
    // this.setState ({sum: this.state.sum + delta})
  }
  addOneCounter = () => {
    this.props.dispatch({
      type: "GENERATE_COUNTERS",
      payload: this.props.lengthOfArray
    })
    // this.setState({
    //   counters: new Array(parseInt(this.refs.name.value)).fill(0).map(counter=>{
    //     return {
    //       id:new Date().getTime() + Math.random(), //want it become unique
    //       number:0
    //     }
    //   }),
    //   counterSum: 0
    // })
  }
  increaseOne = (id) => {
    this.props.dispatch({
      type: "SUM",
      payload: 1
    })
    this.props.dispatch({
      type: "INCREASE_ONE",
      payload: id
    })
  //   this.setState({
  //   counters: this.state.counters.map(counterItem => {
  //   if (counterItem.id===id){
  //     return {number: counterItem.number + 1, id: id};
  //   }
  //   else {
  //     return counterItem;
  //   }
  //   }),
  // })
  // console.log(this.state.counters)
  }
  decreaseOne = (id) => {
    this.props.dispatch({
      type: "SUM",
      payload: -1
    })
    this.props.dispatch({
      type: "DECREASE_ONE",
      payload: id
    })
  //   this.setState({
  //   counters: this.state.counters.map(counterItem => {
  //   if (counterItem.id===id){
  //     return {number: counterItem.number - 1, id: id};
  //   }
  //   else {
  //     return counterItem;
  //     }
  //   }),
  // })
  }
  
  render() {
    return (
      <div> 
        <div>
          {this.props.counters.map(countersElement => 
          <Counter 
            onUpdate={this.updateSum}
            id={countersElement.id}
            counterNum={countersElement.number}
            onIncrease={this.increaseOne}
            onDecrease={this.decreaseOne}
            number={countersElement.number}
          />
          )} 
          sum: {this.props.sum}
        </div>
        <div>
        <input type="text" ref="name"></input>
          <button onClick = {this.addOneCounter}>addCounters</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  sum: state.sum,
  counters: state.counters
}); 
connect(mapStateToProps)(CounterGroup)

export default connect(mapStateToProps)(CounterGroup);
