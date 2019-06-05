import React from "react";
import styled from "styled-components";

const StyledCardStatus = styled.div`
  color: white;
  border-radius: 10px;
  height: 20px;
  text-align: center;
  width: 20px;
  background: ${props => (props.status ? "teal" : "grey")};
  & > input [type="checkbox"] {
    height: 100%;
    opacity: 0;
    width: 100%;
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
