import React, { Component } from 'react';
import { render } from 'react-dom';
import Users from './Users';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Users Listing'
    };
  }

  render() {
    return (
      <div>
        <Users name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
