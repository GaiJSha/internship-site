import {
  StockActionTypes,
  StockItem,
  GET_STOCK,
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  NewItem,
} from "./types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import * as axios from "axios";

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
    fetch("https://localhost:5001/api/stock/", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((content) => {
        console.log("arrived");
        console.log(content);
        dispatch(setStock(content));
      });
}

//export function updateStock(): ThunkAction<Promise<void>, {}, {}, AnyAction>;
