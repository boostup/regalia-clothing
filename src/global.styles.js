import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans Condensed";
  padding: 1rem 2rem;
  margin: 0;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 800px) {
    padding: 0.3rem 0.5rem;
  }
}

a {
  text-decoration: none;
  color: black;
}`;
