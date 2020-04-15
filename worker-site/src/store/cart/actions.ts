import { ADD_PRODUCT, Product } from "./types";

export function addProduct(addedProduct: Product) {
  return {
    type: ADD_PRODUCT,
    payload: addedProduct,
  };
}
