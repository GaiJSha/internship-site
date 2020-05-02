import * as React from "react";
import { AppState } from "../../store";
import { useSelector, shallowEqual } from "react-redux";
import StockTable from "./stockTable";
import AddItemForm from "./addItemForm";
import SearchBox from "../../components/SerchBox";
import { useStockActions } from "../../hooks/useStockActions";
import ConfirmButton from "./ConfirmButton";
import { useFilteredStock } from "../../hooks/useFilteredStock";

const stockChangeSelector = (state: AppState) => state.stock.changed;

export interface StockManagerPageProps {}

const StockManagerPage: React.FC<StockManagerPageProps> = () => {
  const isChanged = useSelector(stockChangeSelector, shallowEqual);
  const [state, setState] = React.useState("");
  const [stock, setFilter] = useFilteredStock();

  const { add, update } = useStockActions();

  return (
    <div className="stock-page">
      <SearchBox setText={setFilter} options={stock.map((item) => item.name)} />
      <ConfirmButton onConfirm={update} {...{ isChanged }} />
      <StockTable stock={stock} />
      <AddItemForm addItem={add}></AddItemForm>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default StockManagerPage;
