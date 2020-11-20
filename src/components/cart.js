import React from 'react';
import axios from 'axios'

import { Link, Redirect } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'

import { connect } from 'react-redux';
import { getCart, removeFromCart, checkoutCart } from '../redux/actions/cartAction';


class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  handleRemove(id){
    this.props.removeFromCart(this.props.email, this.props.token, id)
  }

  handleCheckOut(){
    this.props.checkoutCart(this.props.email, this.props.token)
  }

  componentDidMount(){

    if(this.props.loggedInStatus)
    {
      this.props.getCart(this.props.email, this.props.token)
    }
    
  }


  render() 
  {
    if(!this.props.loggedInStatus)
    {
      return  <Redirect to='/signin' />
    }

    return (
      
      <div>
        <h3>Cart Items</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.items.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td><Button onClick={() => this.handleRemove(item.id)} variant="outline-danger">Remove</Button></td>
                </tr>
              ))
            }
            <tr>
              <td colSpan="4"><b>Total Price</b></td>
              <td><b>{this.props.order.sub_total}</b></td>
            </tr>
          </tbody>
        </Table>
      
        <Button onClick={this.handleCheckOut} className="btn btn-primary">CheckOut</Button>
      
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  if(state.session.loggedInStatus)
  {
    return {
      loggedInStatus: state.session.loggedInStatus,
      email: state.session.user.data.user.email,
      token: state.session.user.data.user.authentication_token,
      items: state.cart.items,
      order: state.cart.order
    }
  }
  else
  {
    return {loggedInStatus: state.session.loggedInStatus}
  }
}

export default connect( mapStateToProps, { getCart, removeFromCart, checkoutCart })(Cart);