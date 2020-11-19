import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

if(localStorage.getItem('user')){
  initialState.session = {user: JSON.parse(localStorage.getItem('user'))}
  initialState.session.loggedInStatus = true
}

export default createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));