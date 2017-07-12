import React, { Component } from 'react';

export default class Password extends Component {
	constructor(props) {
		super(props);

    this.state = {
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    // this.handleEnter1 = this.handleEnter1.bind(this);
    // this.handleEnter2 = this.handleEnter2.bind(this);
	}

  handleChange(e) {
    if(e.target) {
      this.setState({password: e.target.value})
    }
  }

  // handleEnter1(e) {
  //   if (e.key === 'Enter') {
  //     console.log('keypress')
  //     this.props.updateParent()
  //   }
  // }

  // handleEnter2(e) {
  //   if (e.key === 'Enter') {
  //     console.log('keyup')
  //     this.props.submit()
  //   }
  // }


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
          // onKeyPress={this.handleEnter1}
          // onKeyUp={this.handleEnter2}
			/>
		)
	}
}