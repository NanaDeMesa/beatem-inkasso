import React from "react";
import styled from "styled-components";

const Delete = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  justify-self: end;
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
