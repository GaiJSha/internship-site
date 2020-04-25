import {
  ADD_PRODUCT,
  Product,
  REMOVE_PRODUCT,
  CartActionTypes,
  SET_NAME,
  SET_ADDRESS,
  SET_PHONE,
  CartState,
  RESET_ORDER,
} from "./types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import Axios from "axios";

export function addProduct(addedProduct: Product): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: addedProduct,
  };
}

export function removeProduct(removedProduct: Product): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: removedProduct,
  };
}

export function setName(name: string): CartActionTypes {
  return {
    type: SET_NAME,
    name,
  };
}

export function setAddress(address: string): CartActionTypes {
  return {
    type: SET_ADDRESS,
    address,
  };
}

export function setPhone(phone: string): CartActionTypes {
  return {
    type: SET_PHONE,
    phone,
  };
}

export function resetOder(): CartActionTypes {
  return {
    type: RESET_ORDER,
  };
}

export function confirmOrder(): ThunkAction<
  Promise<void>,
  CartState,
  any,
  AnyAction
> {
  return (dispatch, getState): Promise<void> => {
    return Axios.post("https://localhost:5001/api/orders/", getState(), {
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        dispatch(confirmOrder());
      } else {
      }
    });
  };
}
