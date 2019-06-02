import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box; 
}

body {
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: linear-gradient(45deg, #bfeacd, #5495b7);
}

`;

export default GlobalStyle;
