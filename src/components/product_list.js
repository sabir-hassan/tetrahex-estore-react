import React from 'react';
import axios from 'axios'

import { Link, Redirect } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'

import {connect} from 'react-redux'
import { addToCart } from '../redux/actions/cartAction';



class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
    	products : []
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(id){
    this.props.addToCart(this.props.email, this.props.token, id, 1)
  }


	componentDidMount(){

    if(this.props.loggedInStatus)
    {

   		const headers = {
        'X-User-Email': this.props.email,
        'X-User-Token': this.props.token
      }
      const id = this.props.match.params.categoryID;
      axios.get(`http://localhost:3000/api/v1/categories/${id}/products`,{
        headers: headers,
      }).then(res => {
         if(res.status == 200)
         {
           this.setState({
             products : res.data
           })
         }
       })
    }
 	}


  render() 
  {
    if(!this.props.loggedInStatus)
    {
      return  <Redirect to='/signin' />
    }

    return (
      <>
        <h3>Products List</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><Button onClick={() => this.handleAddToCart(item.id)} variant="outline-success">Add To Cart</Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </>
    )
  }
}

const mapStateToProps = state => {
  if(state.session.loggedInStatus)
  {
    return {
      loggedInStatus: state.session.loggedInStatus,
      email: state.session.user.data.user.email,
      token: state.session.user.data.user.authentication_token
    }
  }
  else
  {
    return {loggedInStatus: state.session.loggedInStatus}
  }
}

export default connect (mapStateToProps, {addToCart})(ProductList);