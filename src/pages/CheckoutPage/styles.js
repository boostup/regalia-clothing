import styled from "styled-components";

export default styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

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

  button {
    margin-left: auto;
    margin-top: 40px;
  }
`;