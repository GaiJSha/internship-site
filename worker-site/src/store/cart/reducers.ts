import { ADD_PRODUCT, CartState, CartActionTypes , Product} from "./types";

const initialState: CartState = { items: [] };

export function systemReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newItems = [ action.payload ,...state.items]
      return {
        items: newItems
      };
    }
    default:
      return state;
  }
}
