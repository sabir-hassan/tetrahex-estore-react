
import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER} from '../types/sessionTypes';

const initialState = { user: {email:'', token:''}, loggedInStatus: '' };
const sessionReducer = ( state=initialState, action) => {

  switch (action.type) {

    case LOGIN_USER: 
      return { ...state, user: action.payload, loggedInStatus: true };

    case LOGOUT_USER:
      return { ...state, loggedInStatus: false };

    case SIGNUP_USER: 
      return { ...state, user: action.payload, loggedInStatus: true };

    default: 
      return state;
  };
};


export default sessionReducer;