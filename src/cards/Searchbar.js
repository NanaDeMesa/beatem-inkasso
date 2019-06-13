import React from "react";
import styled from "styled-components";

const StyledSearchbar = styled.input`
background: #eeeeee;
background-image: url(./assets/SearchButton.svg);
background-repeat: no-repeat;
background-position: 285px 4px;
border: solid 1px #d3d3d3;
border-radius: 2em;
font-size: 18px;
height: 36px;
margin: 35px auto 35px auto;
opacity: 0.8; 
outline: none;
padding-left: 10px;
position: sticky; 
top: 35px;
width: 326px;
  

  :focus {
    border: 3px solid #F1B763;
  }

  ::placeholder {
    color: #CDCCCC;
    text-align: center;
  }

  
`;

export default function Searchbar({ onInput, value }) {
  return (
    <StyledSearchbar
      type="text"
      name="searchInput"
      placeholder="Search for creditor..."
      value={value}
      onChange={e => onInput(e.target.value)}
    />
  );
}
