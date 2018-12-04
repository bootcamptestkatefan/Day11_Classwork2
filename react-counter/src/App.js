import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js'
import CounterGroup from './Components/CounterGroup.js'

class App extends Component {
  render() {
    return (

      <CounterGroup lengthOfArray = {5}/>
    );
  }
}

export default App;