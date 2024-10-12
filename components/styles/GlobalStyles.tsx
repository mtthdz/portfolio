import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --black: #000;
    --white: #ffffff;
    --lightGrey: #adadad;
    --lightGreyBlur: #adadad30;
    --grey: #444444;
    --gray: var(--grey);
    --darkGrey: #2a2a2a;
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
    font-family: 'inter', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--lightGrey);

    &:hover,
    &:focus {
      color: var(--white);
      text-decoration: none;
    }
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 300;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--lightGrey);
  }
`