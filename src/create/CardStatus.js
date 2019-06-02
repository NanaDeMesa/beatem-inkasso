import React from "react";
import styled from "styled-components";

const StyledCardStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  background: ${props => (props.status ? "teal" : "grey")};
  & > input [type="checkbox"] {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
`;
export default function({ completed, updateCardStatus }) {
  return (
    <StyledCardStatus onClick={updateCardStatus} status={completed}>
      {completed ? "✓" : "✗"}
      <input type="checkbox" />
    </StyledCardStatus>
  );
}
