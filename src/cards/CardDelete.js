import React from "react";
import styled from "styled-components";

const Delete = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 10px;
  display: flex;
  justify-self: flex-end;
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
