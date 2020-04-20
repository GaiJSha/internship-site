interface ItemType {
  name: string;
  quantity: number;
  price: number;
}

export interface StockItem {
  name: string;
  id: string;
  types: ItemType[];
}

export interface StockState {
  stock: StockItem[];
}

export const GET_STOCK = "GET_STOCK";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface GetStockAction {
  type: typeof GET_STOCK;
  newState: StockState;
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  newItem: StockItem;
}

interface EditItemAction {
  type: typeof EDIT_ITEM;
  editedItem: StockItem;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: string;
}

export type StockActionTypes =
  | GetStockAction
  | AddItemAction
  | EditItemAction
  | RemoveItemAction;
