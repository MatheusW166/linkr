import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: #333333;
    color: #fff;
    font-family: 'Lato', sans-serif;
  }
  button {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;

export default GlobalStyle;
