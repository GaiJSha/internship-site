import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  editItem,
  fetchStock,
  updateStock,
} from "../store/stock/actions";
import { StockActionTypes, NewItem, StockItem } from "../store/stock/types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { AppState } from "../store";
import { useCallback } from "react";

export const useStockActions = () => {
  const dispatch = useDispatch();

  const remove = useCallback(
    (id: string): StockActionTypes => dispatch(removeItem(id)),
    [dispatch]
  );

  const add = useCallback(
    (newItem: NewItem): StockActionTypes => dispatch(addItem(newItem)),
    [dispatch]
  );

  const edit = useCallback(
    (item: StockItem): StockActionTypes => dispatch(editItem(item)),
    [dispatch]
  );

  const fetch = useCallback(
    async (): Promise<ThunkAction<Promise<void>, {}, {}, AnyAction>> =>
      await dispatch(fetchStock()),
    [dispatch]
  );

  const update = useCallback(
    async (): Promise<ThunkAction<Promise<void>, AppState, {}, AnyAction>> =>
      await dispatch(updateStock()),
    [dispatch]
  );

  return { add, remove, edit, fetch, update };
};
