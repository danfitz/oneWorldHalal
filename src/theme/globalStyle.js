import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * { box-sizing: border-box; }

  // Add more global styles here
  * {
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;
