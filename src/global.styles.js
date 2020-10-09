import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans Condensed";
  padding: 0;
  margin: 0;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 800px) {
    .page-content{
      padding: 4rem 2rem;
    }
  }
}

a {
  text-decoration: none;
  color: black;
}

.page-content{
  padding: 6rem 2rem;
}

`;
