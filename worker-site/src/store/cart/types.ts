// Describing the shape of the system's slice of state
export interface CartState {
  items: Product[];
}

export interface Product {
  id: string;
  name: string;
  amount: number;
  unitprice: number;
}

// Describing the different ACTION NAMES available
export const ADD_PRODUCT = "ADD_PRODUCT";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

export type CartActionTypes = AddProductAction;
