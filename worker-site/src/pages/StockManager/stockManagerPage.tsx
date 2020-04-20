import * as React from "react";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { addItem, removeItem, editItem } from "../../store/stock/actions";
import { StockState } from "../../store/stock/types";
import StockTable from "./stockTable";
import AddItemForm from "./addItemForm";

export interface StockManagerPageProps {
  removeItem: typeof removeItem;
  addItem: typeof addItem;
  editItem: typeof editItem;
  stock: StockState;
}

const StockManagerPage: React.SFC<StockManagerPageProps> = ({
  addItem,
  removeItem,
  editItem,
  stock,
}) => {
  const actions = { addItem, removeItem, editItem };
  const handleAddClick = () => {
    addItem({
      name: "עגבניה",
      types: [{ name: "כוסית", quantity: 50, price: 3.5 }],
    });
  };

  return (
    <div>
      <AddItemForm addItem={addItem}></AddItemForm>
      <button onClick={handleAddClick}>הוסף</button>
      <StockTable stock={stock} actions={actions} />
    </div>
  );
};

const bindStateToProps = (reduxState: AppState) => ({
  stock: reduxState.stock,
});

export default connect(bindStateToProps, { addItem, removeItem, editItem })(
  StockManagerPage
);
