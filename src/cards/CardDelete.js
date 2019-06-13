import React from "react";
import {DeleteIcon} from "./CardStyles"

export default function CardDelete({ deleteCard }) {
  return (
    <DeleteIcon
      src="./assets/DeleteButton.svg"
      alt="Delete Icon"
      onClick={deleteCard}
    />
  );
}
