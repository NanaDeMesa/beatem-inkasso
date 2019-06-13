import React from "react";
import styled from "styled-components";

const Delete = styled.img`
 display: flex;
  height: 22px;
  justify-self: flex-end;
  margin-bottom: 10px;
  width: 22px;
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
