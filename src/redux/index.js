import {combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';
//import productReducer from './reducers/productReducer';
import sessionReducer from './reducers/sessionReducer';

//products: productReducer,
//cart: cartReducer,
  

export default combineReducers({
  session: sessionReducer,
  cart: cartReducer,
})