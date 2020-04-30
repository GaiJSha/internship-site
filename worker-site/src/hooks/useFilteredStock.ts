import { useSelector } from "react-redux";
import { AppState } from "../store";
import { useState } from "react";
import { StockItem } from "../store/stock/types";

export const useFilteredStock = (): [
  StockItem[],
  (str: string) => void,
  string
] => {
  const stock = useSelector((state: AppState) => state.stock.stock);
  const [searchField, setSearchField] = useState("");

  const filteredStock = stock.filter((item): boolean => {
    if (typeof searchField == "string") {
      return item.name.includes(searchField);
    }
    return false;
  });
  return [filteredStock, setSearchField, searchField];
};
