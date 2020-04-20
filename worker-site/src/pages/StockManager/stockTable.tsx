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
    <div>
      <table>
        {stock.stock.map((item) => (
          <ItemDisplay editItem={actions.editItem} item={item} />
        ))}
      </table>
    </div>
  );
};

export default StockTable;
