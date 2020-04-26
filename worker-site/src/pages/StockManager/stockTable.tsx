import * as React from "react";
import { StockItem } from "../../store/stock/types";
import { removeItem, addItem, editItem } from "../../store/stock/actions";
import ItemDisplay from "./itemDisplay";

export interface StockActions {
  remove: typeof removeItem;
  add: typeof addItem;
  edit: typeof editItem;
}

export interface StockTableProps {
  stock: StockItem[];
  types: string[];
  actions: StockActions;
}

const StockTable: React.SFC<StockTableProps> = ({ stock, actions, types }) => {
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
};

export default StockTable;
