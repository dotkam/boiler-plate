import React, { Component } from 'react';

import Username from './username/username';
import Password from './password/password';
import Submit from './submit/submit';
import userDB from './userDB';
// console.log(userDB)

export default class Login extends Component {
	constructor(props) {
		super(props);

    this.state = {
      username: '',
      password: '',
      badLogin: false
    }

    this.handler = this.handler.bind(this);
    this.submit = this.submit.bind(this);
	}

  handler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  submit() {
    if (userDB[this.state.username] && userDB[this.state.username] === this.state.password) {
      this.props.login();
    } else {
      this.setState({badLogin: true})
    }
  }

	render() {

		return (
			<div>
        <Username updateParent={this.handler} />
        <br/>
        <Password updateParent={this.handler} submit={this.submit}/>
        <br/>
        <Submit submit={this.submit}/> 
        <div id='submit-error'>{this.state.badLogin ? 'Please try again' : ''}</div>
      </div>
		)
	}
}