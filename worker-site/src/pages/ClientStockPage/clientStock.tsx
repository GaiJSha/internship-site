import * as React from "react";
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import ItemDisplay from "./clientItemDisplay";
import SearchBox from "../../components/SerchBox";
import { useFilteredStock } from "../../hooks/useFilteredStock";

export interface IClientStockProps {}

const ClientStockPage: React.FC<IClientStockProps> = () => {
  const [filteredStock, onSearchChange] = useFilteredStock();

  return (
    <div className="stock-page">
      <h1>עמוד הזמנה ללקוח</h1>
      <SearchBox
        options={filteredStock.map((item) => item.name)}
        setText={onSearchChange}
      />
      {filteredStock.map((item) => {
        return <ItemDisplay item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ClientStockPage;
