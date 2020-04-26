import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  editItem,
  fetchStock,
  setFilter,
} from "../store/stock/actions";
import { StockActionTypes, NewItem, StockItem } from "../store/stock/types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export const useStockActions = () => {
  const dispatch = useDispatch();

  const remove = (id: string): StockActionTypes => dispatch(removeItem(id));
  const add = (newItem: NewItem): StockActionTypes =>
    dispatch(addItem(newItem));
  const edit = (item: StockItem): StockActionTypes => dispatch(editItem(item));
  const setfilter = (filter: string): StockActionTypes =>
    dispatch(setFilter(filter));
  const fetch = async (): Promise<
    ThunkAction<Promise<void>, {}, {}, AnyAction>
  > => await dispatch(fetchStock());

  return { add, remove, edit, setfilter, fetch };
};
