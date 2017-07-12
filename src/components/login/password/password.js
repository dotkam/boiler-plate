import React, { Component } from 'react';

export default class Password extends Component {
	constructor(props) {
		super(props);

    this.state = {
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
	}

  handleChange(e) {
    this.setState({password: e.target.value})
  }


	render() {

		return (
  		<input
    			type='password'
    			name='password'
          className='input'
          placeholder='password'
    			value={this.state.password}
          onChange={this.handleChange}
          onBlur={this.props.updateParent}
			/>
		)
	}
}