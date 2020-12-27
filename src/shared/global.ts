import { createGlobalStyle, css } from "styled-components";

import GoldmanSansRegular from "./GoldmanSans_W_Rg.woff2";
import MaterialIconsRegular from "./MaterialIcons-Regular.ttf";

export const bodyStyles = css`
  font-family: "Goldman Sans Regular";
`;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Goldman Sans Regular';
        src: local('Goldman Sans Regular'), local('GoldmanSansRegular'),
        url(${GoldmanSansRegular}) format('woff2');
        // font-weight: 300;
        font-style: normal;
    }

    @font-face {
      font-family: 'Material Icons';
      font-style: normal;
      font-weight: 400;
      src: local('Material Icons'),
        local('MaterialIcons-Regular'),
        url(${MaterialIconsRegular}) format('truetype');
    }

    body {
      ${bodyStyles}
    }

    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;  /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
    
      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;
    
      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;
    
      /* Support for IE. */
      font-feature-settings: 'liga';
    }
`;
