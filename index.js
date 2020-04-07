import React, { Component } from 'react';
import { render } from 'react-dom';
import Products from './Products';
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
        <Products name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
