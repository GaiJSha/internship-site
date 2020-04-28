import * as React from "react";
import { StockItem } from "../../store/stock/types";

export interface IClientItemProps {
  item: StockItem;
}

const ClientItemDisplay: React.FC<IClientItemProps> = ({item}) => {
  return <h3>{item.name}</h3>;
};

export default ClientItemDisplay;
