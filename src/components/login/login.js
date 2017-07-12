import React, { Component } from 'react';

import Username from './username/username';
import Password from './password/password';
import Submit from './submit/submit';

export default class Login extends Component {
	constructor(props) {
		super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handler = this.handler.bind(this);
	}

  handler(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log('this.state', this.state)
  }

	render() {

		return (
			<div>
        <Username updateParent={this.handler} />
        <br/>
        <Password updateParent={this.handler} />
        <br/>
        <Submit />
      </div>
		)
	}
}