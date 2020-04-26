import {
  StockActionTypes,
  StockItem,
  GET_STOCK,
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  NewItem,
  SET_FILTER,
} from "./types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import Axios from "axios";

export function setFilter(filter: string): StockActionTypes {
  return {
    type: SET_FILTER,
    filter,
  };
}

export function addItem(newItem: NewItem): StockActionTypes {
  return {
    type: ADD_ITEM,
    newItem,
  };
}

export function setStock(newStock: StockItem[]): StockActionTypes {
  return {
    type: GET_STOCK,
    newStock,
  };
}

export function editItem(editedItem: StockItem): StockActionTypes {
  return {
    type: EDIT_ITEM,
    editedItem,
  };
}
export function removeItem(id: string): StockActionTypes {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export function fetchStock(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch): Promise<void> =>
    Axios.get("https://localhost:5001/api/stock/", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      dispatch(setStock(res.data));
    });
}

//export function updateStock(): ThunkAction<Promise<void>, {}, {}, AnyAction>;
