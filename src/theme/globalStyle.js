import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * { box-sizing: border-box; }

  html {
    font-family: Roboto, sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.body};
  }

  .visuallyHidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    -webkit-clip-path: inset(100%);
            clip-path: inset(100%);
    clip: rect(0 0 0);
    overflow: hidden;
  }
`;

export default GlobalStyle;
