import React, { Component } from 'react';

export default class Username extends Component {
	constructor(props) {
		super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
	}

  handleChange(e) {
    this.setState({username: e.target.value})
  }


	render() {

		return (
  		<input
    			type='text'
    			name='username'
          className="input"
          placeholder='user'
    			value={this.state.username}
          onChange={this.handleChange}
          onBlur={this.props.updateParent}
			/>
		)
	}
}