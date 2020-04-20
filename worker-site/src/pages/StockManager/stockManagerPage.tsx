import * as React from "react";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../store/stock/actions";
import { StockState } from "../../store/stock/types";

export interface StockManagerPageProps {
  removeItem: typeof removeItem;
  addItem: typeof addItem;
  stock: StockState;
}

const StockManagerPage: React.SFC<StockManagerPageProps> = ({
  addItem,
  stock,
}) => {
  const handleAddClick = () => {
    addItem({
      id: "aasdadas",
      name: "עגבניה",
      types: [{ name: "כוסית", quantity: 50, price: 3.5 }],
    });
  };

  return (
    <div>
      <button onClick={handleAddClick}>הוסף</button>
      <table>
        {stock.stock.map((item) => (
          <tr>
            <td>{item.name}</td>
            {item.types.map((type) => (
              <td>{`${type.name}: ${type.quantity}`}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

const bindStateToProps = (reduxState: AppState) => ({
  stock: reduxState.stock,
});

export default connect(bindStateToProps, { addItem, removeItem })(
  StockManagerPage
);
