import styled from "styled-components/macro";

export const PayButtonWrapper = styled.div`
  position: fixed;
  top: 70px;
  right: 1rem;
  padding: 0;
  width: 100%;
  text-align: right; 
  z-index: 1;
  background: white;

  @media screen and (max-width: 800px) {
    top: 60px;
    padding: 0 1.4rem 1rem;
    right:0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

export default styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  position: relative;

  .thead {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .th {
      width: 10%;
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .test-warning {
    background-color: rgb(250, 216, 220);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    margin: 40px 0;
    color: red;
    font-size: 24px;

    .note {
      font-size: 18px;
      font-style: italic;
    }
  }

  @media screen and (max-width: 800px) {
      width: unset;
      margin: 3rem 1rem;

      .thead{
        display:none;
        .th {
          width: unset;
        }
      }
    }

`;
