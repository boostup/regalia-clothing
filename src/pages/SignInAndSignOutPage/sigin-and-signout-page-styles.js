import styled from "styled-components/macro";

export default styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;

    .buttons {
      display:grid;
      grid-template-columns: 1fr;
    }
  }

`;
