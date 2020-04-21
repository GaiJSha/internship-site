import * as React from "react";
import { StockState } from "../../store/stock/types";
import { removeItem, addItem, editItem } from "../../store/stock/actions";
import ItemDisplay from "./itemDisplay";

export interface StockActions {
  removeItem: typeof removeItem;
  addItem: typeof addItem;
  editItem: typeof editItem;
}

export interface StockTableProps {
  stock: StockState;
  actions: StockActions;
}

const StockTable: React.SFC<StockTableProps> = ({ stock, actions }) => {
  return (
    <div className="stock-table">
      <div className="table-header">
        <h5>מוצרים</h5>
        {stock.types.map((type) => (
          <h5>{type}</h5>
        ))}
        <h5 className="add-type">הוסף סוג</h5>
      </div>
      {stock.stock.map((item) => (
        <ItemDisplay editItem={actions.editItem} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default StockTable;
