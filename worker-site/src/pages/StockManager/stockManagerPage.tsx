import * as React from "react";
import { AppState } from "../../store";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  editItem,
  fetchStock,
} from "../../store/stock/actions";
import {
  StockState,
  NewItem,
  StockItem,
  StockActionTypes,
} from "../../store/stock/types";
import StockTable from "./stockTable";
import AddItemForm from "./addItemForm";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { useState } from "react";
import SearchBox from "../../components/SerchBox";

export interface StockManagerPageProps {
  removeItem: (id: string) => StockActionTypes;
  addItem: (item: NewItem) => StockActionTypes;
  editItem: (item: StockItem) => StockActionTypes;
  fetchStock: () => Promise<ThunkAction<Promise<void>, {}, {}, AnyAction>>;
  stock: StockState;
}

const StockManagerPage: React.FC<StockManagerPageProps> = ({
  addItem,
  removeItem,
  editItem,
  fetchStock,
  stock,
}) => {
  const actions = { addItem, removeItem, editItem };
  const [filter, setFilter] = useState("");

  return (
    <div className="stock-page">
      <SearchBox
        text={filter}
        setText={setFilter}
        options={stock.stock.map((item) => item.name)}
      />
      <StockTable stock={stock} actions={actions} />
      <AddItemForm addItem={addItem}></AddItemForm>
    </div>
  );
};

const bindStateToProps = (reduxState: AppState) => ({
  stock: reduxState.stock,
});

const bindDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  removeItem: (id: string) => dispatch(removeItem(id)),
  addItem: (newItem: NewItem) => dispatch(addItem(newItem)),
  editItem: (item: StockItem) => dispatch(editItem(item)),
  fetchStock: async () => await dispatch(fetchStock()),
});

export default connect(bindStateToProps, bindDispatchToProps)(StockManagerPage);
