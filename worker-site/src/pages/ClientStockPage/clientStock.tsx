import * as React from "react";
import ItemDisplay from "./clientItemDisplay";
import SearchBox from "../../components/SerchBox";
import { useFilteredStock } from "../../hooks/useFilteredStock";

import BuyPopUp from "../../components/PopupForm";
import { StockItem } from "../../store/stock/types";

export interface IClientStockProps {}

const ClientStockPage: React.FC<IClientStockProps> = () => {
  const [filteredStock, onSearchChange] = useFilteredStock();
  const [isOpen, changeOpen] = React.useState(false);
  const [item, setItem] = React.useState<StockItem>({
    name: "",
    id: "",
    types: [],
  });

  const handleClick = (item: StockItem): void => {
    changeOpen(true);
    console.log(item);
    setItem(item);
  };

  return (
    <div className="stock-page">
      <h2 style={{ textAlign: "center" }}>חפש</h2>
      <div className="products-search">
        <SearchBox
          options={filteredStock.map((item) => item.name)}
          setText={onSearchChange}
        />
      </div>

      <table id="products">
        <thead>
          <tr>
            <th className="prod-title">שתיל</th>
            <th className="prod-title">פלאג</th>
            <th className="prod-title">כוסית</th>
          </tr>
        </thead>
        <tbody>
          {filteredStock.map((item) => {
            return (
              <ItemDisplay
                item={item}
                key={item.id}
                handleClick={handleClick}
              />
            );
          })}
        </tbody>
      </table>
      <BuyPopUp open={isOpen} changeOpen={changeOpen} item={item}/>
    </div>
  );
};

export default ClientStockPage;
