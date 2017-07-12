import React, { Component } from 'react';

import Login from './components/login/login.js';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 id='slide-left'>Log in to Dashboard</h1>
        <Login />
      </div>
    );
  }
}
