import React from 'react';
import { Navbar, Nav, Form, FormControl, Button  } from 'react-bootstrap';

import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/sessionAction';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
    };

    this.handlelogout = this.handlelogout.bind(this);
  }

  handlelogout(event){
  	event.preventDefault();
  	console.log('hello from logout')
    this.props.logoutUser();
  }

  render(){

	  return (
	    <div>
			<Navbar bg="primary" variant="dark">
		    <Navbar.Brand href="/">EStore</Navbar.Brand>
			    <Nav className="mr-auto">
			    	{ this.props.loggedInStatus ?
			    		(<Nav.Link onClick={this.handlelogout}>Sign Out</Nav.Link>)
			    		:
				      (<>
				      	<Nav.Link href="/signin">Sign In</Nav.Link>
				      	<Nav.Link href="/signup">Sign Up</Nav.Link>
				       </>
				      )
			    	}
			    </Nav>
			    <Nav>
			    	<Nav.Link href="/cart">Cart</Nav.Link>
			    </Nav>
			  </Navbar>
	    </div>
	  );
	}
}

export default connect(
  state => ({
    loggedInStatus: state.session.loggedInStatus
  }),
  {
    logoutUser,
  }
)(Header);