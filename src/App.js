import React from 'react';
import Header from './components/header'
import {  Route, Switch } from 'react-router-dom';


import CategoryList from './components/category_list'
import SignIn from './components/sign_in'
import SignUp from './components/sign_up'
import ProductList from './components/product_list'
import Cart from './components/cart'


function App() {
  return (
    <div className="container">
      <Header/>

      <Switch>
        <Route path="/" component={CategoryList} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/:categoryID" component={ProductList} />
        

      </Switch>
    </div>
  );
}

export default App;
