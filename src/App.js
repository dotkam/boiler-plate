import React, { Component } from 'react';

import Login from './components/login/login.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Log in to Dashboard',
      class: '',
      loggedIn: false
    }

    this.state.title = (<h1 className='slide-left'>{this.state.message}</h1>);

    this.login = this.login.bind(this)
  }

  login() {
    this.setState({message: 'Dashboard', class: 'slide-left', loggedIn: true})
  }

  render() {
    return (
      <div className='container'>
        <h1 className={this.state.class} onClick={this.test}>{this.state.message}</h1>
        {!this.state.loggedIn ? <Login login={this.login} /> : null}
      </div>
    );
  }
}
