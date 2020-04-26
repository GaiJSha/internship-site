import * as React from "react";
import { AppState } from "../../store";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addItem,
  removeItem,
  editItem,
  fetchStock,
  setFilter,
} from "../../store/stock/actions";
import { NewItem, StockItem, StockActionTypes } from "../../store/stock/types";
import StockTable from "./stockTable";
import AddItemForm from "./addItemForm";
import { ThunkAction } from "redux-thunk";
import SearchBox from "../../components/SerchBox";
import { AnyAction } from "redux";
import { createSelector } from "reselect";

const stockSelector = (state: AppState) => state.stock.stock;
const filterSelector = (state: AppState) => state.stock.filter;
const typesSelector = (state: AppState) => state.stock.types;
const filteredStockSelector = createSelector(
  stockSelector,
  filterSelector,
  (stock, filter) =>
    filter ? stock.filter((item) => item.name.indexOf(filter) >= 0) : stock
);

export interface StockManagerPageProps {}

const StockManagerPage: React.FC<StockManagerPageProps> = () => {
  const dispatch = useDispatch();
  const filteredStock = useSelector(filteredStockSelector, shallowEqual);
  const filter = useSelector(filterSelector, shallowEqual);
  const types = useSelector(typesSelector, shallowEqual);

  const remove = (id: string): StockActionTypes => dispatch(removeItem(id));
  const add = (newItem: NewItem): StockActionTypes =>
    dispatch(addItem(newItem));
  const edit = (item: StockItem): StockActionTypes => dispatch(editItem(item));
  const setfilter = (filter: string): StockActionTypes =>
    dispatch(setFilter(filter));
  const fetch = async (): Promise<
    ThunkAction<Promise<void>, {}, {}, AnyAction>
  > => await dispatch(fetchStock());
  const actions = { add, remove, edit };

  return (
    <div className="stock-page">
      <SearchBox
        text={filter}
        setText={setfilter}
        options={filteredStock.map((item) => item.name)}
      />
      <StockTable types={types} stock={filteredStock} actions={actions} />
      <AddItemForm addItem={addItem}></AddItemForm>
    </div>
  );
};

export default StockManagerPage;
