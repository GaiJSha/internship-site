// Describing the shape of the system's slice of state
export interface CartState {
  items: Product[];
  name: string;
  phone: string;
  address: string;
}

export interface Product {
  name: string;
  id: string;
  type: string;
  price: number;
  amount: number;
}

// Describing the different ACTION NAMES available
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const SET_NAME = "SET_NAME";
export const SET_PHONE = "SET_PHONE";
export const SET_ADDRESS = "SET_ADDRESS";
export const RESET_ORDER = "RESET_ORDER";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: Product;
}

interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
}

interface SetPhoneAction {
  type: typeof SET_PHONE;
  phone: string;
}

interface SetAddressAction {
  type: typeof SET_ADDRESS;
  address: string;
}

interface ResetOrderAction {
  type: typeof RESET_ORDER;
}

export type CartActionTypes =
  | AddProductAction
  | RemoveProductAction
  | SetNameAction
  | SetAddressAction
  | SetPhoneAction
  | ResetOrderAction;
