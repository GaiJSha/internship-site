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
import { useStockActions } from "../../hooks/useStockActions";

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
  const filteredStock = useSelector(filteredStockSelector, shallowEqual);
  const filter = useSelector(filterSelector, shallowEqual);
  const types = useSelector(typesSelector, shallowEqual);

  const { add, remove, edit, setfilter, fetch } = useStockActions();
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
