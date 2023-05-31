import { ADD_TO_CART, REMOVE, REMOVE_TO_CART } from "../action/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
    let product = state.cartItems.find((c) => c.product.id === payload.id);
      
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_TO_CART:
      let pro = state.cartItems.find((c) => c.product.id === payload.id);
        if((pro.quantity-1)>0){
          pro.quantity--;
          return{
            ...state,
          };
        }else{
          return{
            ...state,
            cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),

          }
         
        }
      case REMOVE:
       { return{
        
          cartItems:[]
        }}

       
    default:
      return state;
  }
}
