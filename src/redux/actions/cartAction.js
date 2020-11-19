import axios from 'axios';
import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, CART_CHECKOUT } from "../types/cartTypes";

export const getCart = (email, token) => (dispatch) => {

  const headers = {
    'X-User-Email': email,
    'X-User-Token': token
  }

  axios.get("http://localhost:3000/api/v1/cart", {
    headers: headers
  })
  .then(response => {
    return dispatch({type: GET_CART, payload: response.data })
  })
  .catch(error => {
    console.log("get cart error", error);
  });

};

export const addToCart = (email, token, product, quantity) => (dispatch) => {

  const headers = {
    'X-User-Email': email,
    'X-User-Token': token
  }

  axios.post("http://localhost:3000/api/v1/cart", 

    {
      product:{
        id:product,
        quantity:quantity
      }
    },

    {
      headers: headers
    }
  )
  .then(response => {
    return dispatch({type: ADD_TO_CART, payload: response.data })
  })
  .catch(error => {
    console.log("add To Cart error", error);
  });

};

export const removeFromCart = (email, token, id) => (dispatch) => {

  const headers = {
    'X-User-Email': email,
    'X-User-Token': token
  }

  axios.delete(`http://localhost:3000/api/v1/cart/${id}`, {
    headers: headers
  })
  .then(response => {
    return dispatch({type: REMOVE_FROM_CART, payload: response.data })
  })
  .catch(error => {
    console.log("remove from Cart error", error);
  });  

};

export const checkoutCart = (email, token) => (dispatch) => {

  const headers = {
    'X-User-Email': email,
    'X-User-Token': token
  }

  axios.post("http://localhost:3000/api/v1/order", 

    {
      status:'open'
    },

    {
      headers: headers
    }

  )
  .then(response => {
    return dispatch({type: CART_CHECKOUT, payload: response.data })
  })
  .catch(error => {
    console.log("checkout Cart error", error);
  });

};