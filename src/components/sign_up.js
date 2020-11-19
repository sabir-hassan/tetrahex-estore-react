import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/sessionAction';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
    	email:'',
    	password:'',
    	password_confirmation:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.signupUser(this.state.email, this.state.password, this.state.password_confirmation)
  }

  render() 
  {
  	if (this.props.loggedInStatus) {
      return <Redirect to='/' />
    }
  	return (
	    <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" 
            	className="form-control" 
            	placeholder="Enter email"
            	name='email' 
            	value={this.state.email}
            	onChange={this.handleChange}
            	required
            	/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password"
              className="form-control" 
              placeholder="Enter password"
              name='password' 
              value={this.state.password}
            	onChange={this.handleChange}
            	required
              />
        </div>

       	<div className="form-group">
            <label>Password</label>
            <input type="password" 
            	className="form-control"
            	placeholder="Enter password" 
            	name='password_confirmation'
            	value={this.state.password_confirmation}
            	onChange={this.handleChange}
            	required
            	/>
        </div>


        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

	    </form>
		);
  }
}

export default connect(
  state => ({
    loggedInStatus: state.session.loggedInStatus
  }),
  {
    signupUser,
  }
)(SignUp);