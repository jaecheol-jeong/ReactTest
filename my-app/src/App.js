import React, { Component } from 'react';
import Contents from './components/Contents'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to ..</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contents title="!!!" />
      </div>
    );
  }
}

export default App;
