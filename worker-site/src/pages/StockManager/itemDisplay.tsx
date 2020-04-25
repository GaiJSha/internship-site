import * as React from "react";
import { StockItem } from "../../store/stock/types";
import { editItem } from "../../store/stock/actions";
import { useState } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";

export interface ItemDisplayProps {
  item: StockItem;
  editItem: typeof editItem;
  types: string[];
}

const ItemDisplay: React.FC<ItemDisplayProps> = ({ item, editItem, types }) => {
  const availableTypes = types.filter((type) =>
    item.types.every((itemType) => itemType.name !== type)
  );
  const [isOpen, setOpen] = useState(false);
  const [newType, setType] = useState(availableTypes[0]);
  const [newPrice, setPrice] = useState(0);
  const handleAddClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isOpen) setOpen(true);
    else {
      if (newType !== "") {
        setOpen(false);
        const alteredItem = item;
        alteredItem.types.push({ name: newType, price: newPrice, amount: 0 });
        editItem(alteredItem);
        setType("");
        setPrice(0);
      }
    }
  };
  return (
    <div className="stock-row">
      <h5>{item.name}</h5>
      {item.types.map((type, index) => (
        <span style={{ gridColumn: types.indexOf(type.name) + 2 }}>
          <input
            name={`${item.id}:${type.name}`}
            value={type.amount}
            type="number"
            onChange={(e) => {
              let changedItem = Object.assign({}, item);
              changedItem.types[index].amount = +e.target.value;
              editItem(changedItem);
            }}
          />
        </span>
      ))}
      <span className="add-type">
        <button onClick={() => setOpen(!isOpen)}> {isOpen ? "X" : "+"} </button>
        {isOpen && (
          <form onSubmit={handleAddClick}>
            <select
              name="type"
              onChange={(e) => setType(e.currentTarget.value)}
            >
              {availableTypes.map((type) => (
                <option>{type}</option>
              ))}
            </select>
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setPrice(+e.target.value)}
            />
            <input type="submit" value="הוסף" />
          </form>
        )}
      </span>
    </div>
  );
};

const mapStoreToProps = (reuduxStore: AppState) => {
  return {
    types: reuduxStore.stock.types,
  };
};

export default connect(mapStoreToProps, {})(ItemDisplay);
