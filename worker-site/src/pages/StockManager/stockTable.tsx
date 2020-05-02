import * as React from "react";
import { StockItem } from "../../store/stock/types";
import ItemDisplay from "./itemDisplay";
import { useStockActions } from "../../hooks/useStockActions";
import { AppState } from "../../store";
import { useSelector, shallowEqual } from "react-redux";

export interface StockTableProps {
  stock: StockItem[];
}

const typesSelector = (state: AppState) => state.stock.types;

const StockTable: React.FC<StockTableProps> = React.memo(({ stock }) => {
  const actions = useStockActions();
  const types = useSelector(typesSelector, shallowEqual);

  return (
    <div className="stock-table">
      <div className="table-header">
        <h5>מוצרים</h5>
        {types.map((type) => (
          <h5>{type}</h5>
        ))}
        <h5 className="add-type">הוסף סוג</h5>
      </div>
      {stock.map((item) => (
        <ItemDisplay
          editItem={actions.edit}
          item={item}
          key={item.id}
          types={types}
        />
      ))}
    </div>
  );
});

export default StockTable;
