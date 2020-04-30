import * as React from "react";
import { AppState } from "../../store";
import { useSelector, shallowEqual } from "react-redux";
import StockTable from "./stockTable";
import AddItemForm from "./addItemForm";
import SearchBox from "../../components/SerchBox";
import { createSelector } from "reselect";
import { useStockActions } from "../../hooks/useStockActions";
import ConfirmButton from "./ConfirmButton";

const stockSelector = (state: AppState) => state.stock.stock;
const filterSelector = (state: AppState) => state.stock.filter;
const typesSelector = (state: AppState) => state.stock.types;
const filteredStockSelector = createSelector(
  stockSelector,
  filterSelector,
  (stock, filter) =>
    filter ? stock.filter((item) => item.name.indexOf(filter) >= 0) : stock
);
const stockChangeSelector = (state: AppState) => state.stock.changed;

export interface StockManagerPageProps {}

const StockManagerPage: React.FC<StockManagerPageProps> = () => {
  const filteredStock = useSelector(filteredStockSelector, shallowEqual);
  const filter = useSelector(filterSelector, shallowEqual);
  const types = useSelector(typesSelector, shallowEqual);
  const isChanged = useSelector(stockChangeSelector, shallowEqual);

  const { add, remove, edit, setfilter, update } = useStockActions();
  const actions = { add, remove, edit };

  return (
    <div className="stock-page">
      <SearchBox
        // text={filter}
        setText={setfilter}
        options={filteredStock.map((item) => item.name)}
      />
      <ConfirmButton onConfirm={update} {...{ isChanged }} />
      <StockTable types={types} stock={filteredStock} actions={actions} />
      <AddItemForm addItem={add}></AddItemForm>
    </div>
  );
};

export default StockManagerPage;
