import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, CART_CHECKOUT } from "../types/cartTypes";

const initialState = { items:[]}
const cartReducer = (state = initialState, action) => {
	console.log(action.payload)

  switch (action.type) {

  	case GET_CART:
      return { ...state, items: action.payload };

    case ADD_TO_CART:
      return { ...state, items: action.payload };

    case REMOVE_FROM_CART:
      return { ...state, items: action.payload };

    case CART_CHECKOUT:
      return { ...state, items: action.payload };

    default:
      return state;
  }
}
export default cartReducer