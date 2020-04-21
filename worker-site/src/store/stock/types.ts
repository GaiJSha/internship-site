interface ItemType {
  name: string;
  amount: number;
  price: number;
}

export interface NewItem {
  name: string;
  types: ItemType[];
}

export interface StockItem {
  name: string;
  id: string;
  types: ItemType[];
}

export interface StockState {
  stock: StockItem[];
  types: string[];
}

export const GET_STOCK = "GET_STOCK";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface GetStockAction {
  type: typeof GET_STOCK;
  newStock: StockItem[];
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  newItem: NewItem;
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
