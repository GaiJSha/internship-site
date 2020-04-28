import * as React from "react";
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import ItemDisplay from "./clientItemDisplay";
import SearchBox from "../../components/SerchBox";

export interface IClientStockProps {}

const ClientStockPage: React.FC<IClientStockProps> = () => {
  const stock = useSelector((state: AppState) => state.stock.stock);
  const [searchField, setSearchField] = React.useState("");

  const onSearchChange = (value: string) => {
    setSearchField(value);
  };

  const filteredStock = stock.filter((item): boolean => {
    if (typeof searchField == "string") {
      return item.name.includes(searchField);
    }
    return false;
  });

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
