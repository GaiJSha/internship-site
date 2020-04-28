import React from "react";

export interface ConfirmButtonProps {
  isChanged: boolean;
  onConfirm: any;
}

const ConfirmButton: React.SFC<ConfirmButtonProps> = ({
  onConfirm,
  isChanged,
}) => {
  return (
    <button disabled={!isChanged} onClick={onConfirm}>
      אישור
    </button>
  );
};

export default ConfirmButton;
