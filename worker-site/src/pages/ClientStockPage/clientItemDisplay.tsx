import * as React from "react";
import { StockItem } from "../../store/stock/types";

export interface IClientItemProps {
  item: StockItem;
  handleClick: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

const ClientItemDisplay: React.FC<IClientItemProps> = ({ item, handleClick }) => {
  const noMore = "אזל המלאי";

  const checkIfAvailable = (item: StockItem): boolean => {
    if (item.types[0].amount > 0 || item.types[1].amount > 0) {
      return true;
    } else {
      return false;
    }
  };

  

  const checkAvailability = (amount: number): boolean => {
    return amount > 0;
  };
  return checkIfAvailable(item) ? (
    <tr onClick={handleClick}>
      <td className="prod-data">{item.name}</td>
      <td className="prod-data">
        {checkAvailability(item.types[0].amount)
          ? item.types[0].amount + " / " + item.types[0].price + " ₪"
          : noMore}
      </td>
      <td className="prod-data">
        {checkAvailability(item.types[1].amount)
          ? item.types[1].amount + " / " + item.types[1].price + " ₪"
          : noMore}
      </td>
    </tr>
  ) : null;
};

export default ClientItemDisplay;
