import {
  StockState,
  StockActionTypes,
  ADD_ITEM,
  GET_STOCK,
  REMOVE_ITEM,
  EDIT_ITEM,
} from "./types";

const initialState: StockState = {
  stock: [],
};

export function stockReducer(
  state = initialState,
  action: StockActionTypes
): StockState {
  switch (action.type) {
    case ADD_ITEM: {
      const newStock = state.stock;
      newStock.push(action.newItem);
      return {
        ...state,
        ...{ stock: newStock },
      };
    }
    case EDIT_ITEM: {
      let newStock = state.stock;
      newStock = newStock.map((item) =>
        item.id === action.editedItem.id ? action.editedItem : item
      );
      return {
        ...state,
        ...{ stock: newStock },
      };
    }
    case REMOVE_ITEM: {
      const newStock = state.stock.filter((item) => item.id !== action.id);
      return {
        ...state,
        ...{ stock: newStock },
      };
    }
    case GET_STOCK: {
      return {
        ...state,
        ...action.newState,
      };
    }
    default:
      return state;
  }
}
