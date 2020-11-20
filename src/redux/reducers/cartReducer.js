import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, CART_CHECKOUT } from "../types/cartTypes";

const initialState = { order: {}, items:[]}
const cartReducer = (state = initialState, action) => {
	console.log(action.payload)

  switch (action.type) {

  	case GET_CART:
      return { ...state, order: action.payload.order, items: action.payload.items };

    case ADD_TO_CART:
      return { ...state, order: action.payload.order, items: action.payload.items };

    case REMOVE_FROM_CART:
      return { ...state, order: action.payload.order, items: action.payload.items };

    case CART_CHECKOUT:
      return { ...state, order: action.payload.order, items: action.payload.items };

    default:
      return state;
  }
}
export default cartReducer