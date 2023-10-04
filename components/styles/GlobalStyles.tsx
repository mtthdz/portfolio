import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --black: #0a0a0a;
    --white: #ffffff;
    --lightGrey: #adadad;
    --lightGreyBlur: #adadad30;
    --darkGrey: #1e1e1e;
    --darkGreyBlur: #1e1e1e80;
    --red: #ff6565;
    --green: #29ffa5;
    --maxWidth: 1200px;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--black);
    color: var(--white);
    font-family: 'Source_Sans_3', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: normal;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--white);

    &:hover,
    &:focus {
      color: var(--lightGrey);
      text-decoration: none;
    }
  }
`