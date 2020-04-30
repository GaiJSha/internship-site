import * as React from "react";
import Popup from "reactjs-popup";

export interface PopupFormProps {
  open: boolean;
  changeOpen: (open: boolean) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ open, changeOpen }) => {
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
          voluptate ea, accusamus excepturi deleniti ratione sapiente!
          Laudantium, aperiam doloribus. Odit, aut.
        </div>
      </Popup>
    </div>
  );
};

export default PopupForm;
