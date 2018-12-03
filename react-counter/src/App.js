import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {number: 0}
  addOneNumber = () => {
    this.setState ({number: this.state.number+1});
  }
  minusOneNumber = () => {
    this.setState ({number: this.state.number-1});
  }
  render() {
    return (
      <div>
        <button onClick = {this.addOneNumber}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick = {this.minusOneNumber}>-</button>
      </div>
    )  
  }
}

export default App;
