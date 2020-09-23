import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;

  .back-button {
    cursor: pointer;
    .nav-icon {
      font-size: 22px;
      top: -4px;
      position: relative;
    }
  }

  .title,
  .back-button {
    font-size: 28px;
    text-transform: uppercase;
    margin: 0 0 25px;
    position: relative;
  }

  .title {
    text-align: center;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
      margin-bottom: 30px;
    }
  }
`;
