import {
  StockState,
  StockActionTypes,
  ADD_ITEM,
  GET_STOCK,
  REMOVE_ITEM,
  EDIT_ITEM,
  StockItem,
} from "./types";
import { v4 } from "uuid";

const initialState: StockState = {
  stock: [],
  types: ["כוסית", "פלאג", "זריעות", "כללי"],
};

export function stockReducer(
  state = initialState,
  action: StockActionTypes
): StockState {
  switch (action.type) {
    case ADD_ITEM: {
      const newStock = state.stock;
      const newItem: StockItem = { id: v4(), ...action.newItem };
      newStock.push(newItem);
      let newTypes = state.types;
      action.newItem.types.forEach((type) => {
        if (!newTypes.includes(type.name)) {
          newTypes.push(type.name);
        }
      });
      return {
        ...state,
        ...{ stock: newStock, types: newTypes },
      };
    }
    case EDIT_ITEM: {
      let newStock = state.stock;
      newStock = newStock.map((item) =>
        item.id === action.editedItem.id ? action.editedItem : item
      );
      let newTypes = state.types;
      action.editedItem.types.forEach((type) => {
        if (!newTypes.includes(type.name)) {
          newTypes.push(type.name);
        }
      });
      return {
        ...state,
        ...{ stock: newStock, types: newTypes },
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
