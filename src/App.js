import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Question content="What is your favorite color?" />
        </header>
      </div>
    );
  }
}

export default App;
