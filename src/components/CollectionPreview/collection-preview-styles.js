import styled from "styled-components/macro";

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .nav-bar {
    &::before {
      content: "\u00A0";
    }
    display: grid;
    grid-template-columns: 1fr 11fr;
    position: relative;
    margin: 0 0 2.5rem;
    width:100%;

    .nav-icon {
      top: 1px;
      position: absolute;
    }

    .title {
      font-size: 28px;
      text-transform: uppercase;
      text-align: center;
      position: absolute;
      width:100%;
      margin: 0 auto;
      cursor: pointer;

    }
  }

  .preview {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 800px) {
    align-items: center;

    .nav-bar {
      margin: 0 0 2rem;
    }
    
    .preview {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.6rem;
    }
  }
`;
