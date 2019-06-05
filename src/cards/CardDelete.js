import React from "react";
import styled from "styled-components";

const Delete = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 10px;
`;
export default function CardDelete({ deleteCard }) {
  return (
    <Delete
      src="./assets/DeleteButton.svg"
      alt="Delete Icon"
      onClick={deleteCard}
    />
  );
}
