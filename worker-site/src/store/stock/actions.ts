import {
  StockState,
  StockActionTypes,
  StockItem,
  GET_STOCK,
  ADD_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
  NewItem,
} from "./types";

export function addItem(newItem: NewItem): StockActionTypes {
  return {
    type: ADD_ITEM,
    newItem,
  };
}

export function getStock(newState: StockState): StockActionTypes {
  return {
    type: GET_STOCK,
    newState,
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
