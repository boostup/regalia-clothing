import styled from "styled-components/macro";

export default styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  .title,
  .instructions  {
    margin: 1rem 0;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
