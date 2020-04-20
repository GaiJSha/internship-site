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
        alteredItem.types.push({ name: newType, price: newPrice, quantity: 0 });
        editItem(alteredItem);
        setType("");
        setPrice(0);
      }
    }
  };

  return (
    <div>
      <h5>{item.name}</h5>
      {item.types.map((type, index) => (
        <td>
          {type.name + " "}
          <input
            name={`${item.id}:${type.name}`}
            value={type.quantity}
            type="number"
            onChange={(e) => {
              let changedItem = Object.assign({}, item);
              changedItem.types[index].quantity = +e.target.value;
              editItem(changedItem);
            }}
          />
        </td>
      ))}
      <button onClick={() => setOpen(!isOpen)}> {isOpen ? "X" : "+"} </button>
      {isOpen && (
        <form onSubmit={handleAddClick}>
          <select name="type" onChange={(e) => setType(e.currentTarget.value)}>
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
    </div>
  );
};

const mapStoreToProps = (reuduxStore: AppState) => {
  return {
    types: reuduxStore.stock.types,
  };
};

export default connect(mapStoreToProps, {})(ItemDisplay);
