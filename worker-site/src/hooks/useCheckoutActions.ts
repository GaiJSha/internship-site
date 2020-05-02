import { useDispatch } from "react-redux";

import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { AppState } from "../store";
import { useCallback } from "react";
import {
  addProduct,
  removeProduct,
  setPhone,
  confirmOrder,
  resetOder,
  setAddress,
  setName,
} from "../store/cart/actions";
import { Product } from "../store/cart/types";

export const useCheckoutActions = () => {
  const dispatch = useDispatch();

  const add = useCallback((product: Product) => dispatch(addProduct(product)), [
    dispatch,
  ]);

  const remove = useCallback(
    (product: Product) => dispatch(removeProduct(product)),
    [dispatch]
  );

  const setname = useCallback((name: string) => dispatch(setName(name)), [
    dispatch,
  ]);

  const setphone = useCallback((phone: string) => dispatch(setPhone(phone)), [
    dispatch,
  ]);

  const setaddress = useCallback(
    (address: string) => dispatch(setAddress(address)),
    [dispatch]
  );

  const resetoder = useCallback(() => dispatch(resetOder()), [dispatch]);

  return { add, remove, setname, setphone, setaddress };
};
