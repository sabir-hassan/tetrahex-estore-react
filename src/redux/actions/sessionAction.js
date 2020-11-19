import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "../types/sessionTypes"


export const loginUser = (email, password) => (dispatch) => {

  axios.post("http://localhost:3000/api/v1/sign_in", 
  {
    user:{
      email: email,
      password: password
    }
  },
  )
  .then(response => {
    if (response.status === 200)
    {
      localStorage.setItem("user", JSON.stringify(response.data))
      console.log("response: ", response.data)
      return dispatch({type: LOGIN_USER,payload: response.data })  
    }
  })
  .catch(error => {
    console.log("login error", error);
  });
  
}

export const logoutUser = (email, token) => (dispatch) => {
  
    localStorage.removeItem('user');
    return dispatch({type: LOGOUT_USER })
  
}

export const signupUser = (email, password, password_confirmation) => (dispatch) => {
  
  axios.post("http://localhost:3000/api/v1/sign_up", 
  {
    user:{
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
  },
  )
  .then(response => {
    //console.log("res from login", response);
    if (response.data)
    {
      localStorage.setItem("user", JSON.stringify(response.data))
      console.log("response: ", response.data)
      //setAuthToken=(response.data.authentication_token)
      return dispatch({type: SIGNUP_USER,payload: response.data })
    }
  })
  .catch(error => {
    console.log("signup error", error);
  });
  
}