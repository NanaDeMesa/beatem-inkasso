import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box; 
}

body {
    background: linear-gradient(45deg, #bfeacd, #5495b7);
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    padding: 0;
}

`;

export default GlobalStyle;
