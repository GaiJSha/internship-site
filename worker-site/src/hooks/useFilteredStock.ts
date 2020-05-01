import { useSelector } from "react-redux";
import { AppState } from "../store";
import { useState, useMemo } from "react";
import { StockItem } from "../store/stock/types";

export const useFilteredStock = (): [
  StockItem[],
  (str: string) => void,
  string
] => {
  const stock = useSelector((state: AppState) => state.stock.stock);
  const [filter, setFilter] = useState("");

  const filteredStock = useMemo(
    () =>
      stock.filter((item): boolean => {
        if (typeof filter == "string") {
          return item.name.includes(filter);
        }
        return false;
      }),
    [stock, filter]
  );

  return [filteredStock, setFilter, filter];
};
