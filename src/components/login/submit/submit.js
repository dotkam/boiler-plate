import React, { Component } from 'react';

export default class Submit extends Component {
	constructor(props) {
		super(props);
	}


	render() {

		return (
  		<button
    			name='submit'
          className='submit'
          onClick={this.props.submit}
			>Login</button>
		)
	}
}