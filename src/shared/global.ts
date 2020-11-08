import { createGlobalStyle, css } from "styled-components";

import GoldmanSansRegular from "./GoldmanSans_W_Rg.woff2";

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

    body {
      ${bodyStyles}
    }
`;
