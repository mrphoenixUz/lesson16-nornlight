import { createContext, useReducer } from "react";

const initialState = {
  products: null,
  wishlist: null,
  cart: [],
};

export const MyContext = createContext();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    case "SET_WISHLIST":
      if (state.wishlist) {
        return { ...state, wishlist: [...state.wishlist, payload] };
      } else {
        return { ...state, wishlist: [payload] };
      }
    case "REMOVE_WISHLIST":
      return { ...state, wishlist: state.wishlist.filter((w) => w.id !== payload) };
    case "ADD_TO_CART":
      if (state.cart.some((item) => item.id === payload.id)) {
        return state;
      }
      return { ...state, cart: [...state.cart, payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};


const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
