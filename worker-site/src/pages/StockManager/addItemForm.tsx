import * as React from "react";
import { useState } from "react";
import { addItem } from "../../store/stock/actions";

export interface addItemProps {
  addItem: typeof addItem;
}

const AddItemForm: React.FC<addItemProps> = ({ addItem }) => {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleAddClick = () => {
    if (!isOpen) setOpen(true);
    else {
      if (name !== "") {
        setOpen(false);
        addItem({ name, types: [] });
      }
    }
  };
  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>{isOpen ? "X" : "+"}</button>
      {isOpen && (
        <span>
          <button onClick={handleAddClick}>הוסף</button>
          שם :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
      )}
    </div>
  );
};

export default AddItemForm;
