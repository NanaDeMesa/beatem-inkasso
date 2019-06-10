import React from "react";
import styled from "styled-components";

const StyledSearchbar = styled.input`
  margin: 35px auto 35px auto;
  width: 326px;
  height: 36px;
  background: #eeeeee;
  border-radius: 2em;
  border: solid 1px #d3d3d3;
  font-size: 18px;
  background-image: url(./assets/SearchButton.svg);
  background-position: 285px 7px;
  background-repeat: no-repeat;
`;

export default function Searchbar({ onInput, value }) {
  return (
    <StyledSearchbar
      type="text"
      name="searchInput"
      placeholder="                             Search"
      value={value}
      onChange={e => onInput(e.target.value)}
    />
  );
}
