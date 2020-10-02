import React, { Component } from 'react';
import reactlogo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={reactlogo} className="App-logo" alt="logo" />
          <h2>WELCOME TO REACT JS</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and SAVE to RELOAD.
        </p>
      </div>
    );
  }
}

export default App;
