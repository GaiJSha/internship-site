import * as React from "react";
import Popup from "reactjs-popup";
import { StockItem } from "../../store/stock/types";

export interface PopupFormProps {
  open: boolean;
  changeOpen: (open: boolean) => void;
  item: StockItem;
}

const PopupForm: React.FC<PopupFormProps> = ({ open, changeOpen, item }) => {
  const closeModal = (): void => {
    changeOpen(false);
  };

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <form action="">
            <h3>{item.name}</h3>
            <label htmlFor="">
              פלאג:
              <input type="number" name="" id="" />
            </label>
            <label htmlFor="">
              כוסית:
              <input type="number" name="" id="" />
            </label>
            <button type="submit">העבר לעגלה</button>
          </form>
        </div>
      </Popup>
    </div>
  );
};

export default PopupForm;
