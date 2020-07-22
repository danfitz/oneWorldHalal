import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * { box-sizing: border-box; }

  * {
    font-family: Roboto, sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.body};
  }
`;

export default GlobalStyle;
