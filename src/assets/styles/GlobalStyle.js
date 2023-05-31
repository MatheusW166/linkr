import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #333333;
    color: #fff;
    font-family: 'Lato', sans-serif;
  }

  input, button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
}
  button {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
  :disabled {
    opacity: 0.4;
  }
`;

export default GlobalStyle;
