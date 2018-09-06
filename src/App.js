import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './components/Label';

class App extends Component {
  constructor() {
    super();
    this.state = {
      example: false,
    };
  }

  enableLogo = () => {
    const { example } = this.state;
    this.setState({
      example: !example,
    });
  };

  render() {
    const { example } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} onClick={() => this.enableLogo()} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {example &&
          <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
          </p>
        }
        <Label number={10} enableLogo={this.enableLogo} />
      </div>
    );
  }
}

export default App;
