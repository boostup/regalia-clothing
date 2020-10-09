import styled from "styled-components/macro";

export default styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 1rem 0.8rem;
  }

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0;
    }
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-transform: uppercase;

    @media screen and (max-width: 800px) {
      width: 80%;
    }

    .option {
      padding: 10px 15px;
      cursor: pointer;

      @media screen and (max-width: 800px) {
        padding: 1rem;
      }

      @media screen and (max-width: 320px) {
        padding: 0.5rem;
      }      
    }
  }
`;
