import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  body {
    background: #FFF;
    color: #52575C;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-weight: bold;
    font-size: 22px;
    color: #3B4256;
    margin: 24px 0 24px 0;
  }

`;
