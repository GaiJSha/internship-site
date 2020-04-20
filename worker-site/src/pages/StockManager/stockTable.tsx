import * as React from "react";

export interface StockTableProps {}

const StockTable: React.SFC<StockTableProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default StockTable;
