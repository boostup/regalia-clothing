import styled from "styled-components/macro";

export default styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      margin-bottom: 15px;
    }
  }

  .button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
    .button {
      display: block;
      opacity: 0.85;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    .button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }

    &:hover {
      .image {
        opacity: unset;
      }
      .button {
        opacity: unset;
      }
    }
  }
`;
