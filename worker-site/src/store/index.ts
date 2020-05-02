import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { systemReducer } from "./system/reducers";
import { stockReducer } from "./stock/reducers";
import { cartReducer } from "./cart/reducers";

const rootReducer = combineReducers({
  system: systemReducer,
  stock: stockReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
