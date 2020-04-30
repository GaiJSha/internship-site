import * as React from "react";
import { AppState } from "../../store";
import { useSelector, shallowEqual } from "react-redux";
import StockTable from "./stockTable";
import AddItemForm from "./addItemForm";
import SearchBox from "../../components/SerchBox";
import { createSelector } from "reselect";
import { useStockActions } from "../../hooks/useStockActions";
import ConfirmButton from "./ConfirmButton";
import { useFilteredStock } from "../../hooks/useFilteredStock";

const typesSelector = (state: AppState) => state.stock.types;
const stockChangeSelector = (state: AppState) => state.stock.changed;

export interface StockManagerPageProps {}

const StockManagerPage: React.FC<StockManagerPageProps> = () => {
  const types = useSelector(typesSelector, shallowEqual);
  const isChanged = useSelector(stockChangeSelector, shallowEqual);

  const [stock, setFilter] = useFilteredStock();

  const { add, remove, edit, update } = useStockActions();
  const actions = { add, remove, edit };

  return (
    <div className="stock-page">
      <SearchBox
        // text={filter}
        setText={setFilter}
        options={stock.map((item) => item.name)}
      />
      <ConfirmButton onConfirm={update} {...{ isChanged }} />
      <StockTable types={types} stock={stock} actions={actions} />
      <AddItemForm addItem={add}></AddItemForm>
    </div>
  );
};

export default StockManagerPage;
