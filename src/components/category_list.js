import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'


class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
    	categories : []
    };
  }

 	componentDidMount(){
    
    if(this.props.loggedInStatus)
    {

      const headers = {
        'X-User-Email': this.props.email,
        'X-User-Token': this.props.token
      }
   		
       axios.get('http://localhost:3000/api/v1/categories', {
          headers: headers,
        })
       .then(res => {
   			if(res.status === 200)
   			{
   				this.setState({
   					categories : res.data
   				})
   			}
   		})
    }
 	}


  render(){  	
    if(!this.props.loggedInStatus)
    {
      return  <Redirect to='/signin' />
    }		
    return (
			<>
			  <h3>Product Categories</h3>
			  {
			  	this.state.categories.map((category, index) => (
		        <h4 key={index}>
		          <Link to={`/${category.id}`}>{category.title} ({category.products_count})</Link>
		        </h4>
      		))
      	}
			</>
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
      token: state.session.user.data.user.authentication_token
    }
  }
  else
  {
    return {loggedInStatus: state.session.loggedInStatus}
  }
}

export default connect (mapStateToProps, {})(CategoryList);