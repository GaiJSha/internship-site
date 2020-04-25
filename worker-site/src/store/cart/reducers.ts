import {
  ADD_PRODUCT,
  CartState,
  CartActionTypes,
  Product,
  REMOVE_PRODUCT,
  RESET_ORDER,
  SET_NAME,
  SET_ADDRESS,
  SET_PHONE,
} from "./types";

const initialState: CartState = {
  items: [],
  name: "",
  address: "",
  phone: "",
};

export function systemReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newItems = [action.payload, ...state.items];
      return {
        ...state,
        items: newItems,
      };
    }
    case REMOVE_PRODUCT: {
      const newItems = state.items.filter(
        (product) =>
          product.id !== action.payload.id &&
          product.type !== action.payload.type
      );
      return {
        ...state,
        items: newItems,
      };
    }
    case RESET_ORDER: {
      return {
        ...initialState,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case SET_PHONE: {
      return {
        ...state,
        phone: action.phone,
      };
    }
    case SET_ADDRESS: {
      return {
        ...state,
        name: action.address,
      };
    }
    default:
      return state;
  }
}
