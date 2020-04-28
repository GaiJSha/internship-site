import * as React from "react";
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import ItemDisplay from "./clientItemDisplay";

export interface IClientStockProps {}

const ClientStockPage: React.FC<IClientStockProps> = () => {
  const stock = useSelector((state: AppState) => state.stock.stock);
  console.log(stock);

  return (
    <div className="stock-page">
      <h1>Client Stock Page</h1>
      {stock.map(item => {
        return <ItemDisplay item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ClientStockPage;
