import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState((prevState) => (Calculate(prevState)), buttonName);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <Display result={total || next} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
