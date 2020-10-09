import styled from "styled-components/macro";

export default styled.div`
  display: flex;
  flex-direction: column;

  .nav-bar {
    &::before {
      content: "\u00A0";
    }
    display: grid;
    grid-template-columns: 1fr 11fr;
    position: relative;
    margin: 0 0 25px;
    width:100%;

    .nav-icon {
      cursor: pointer;
      font-size: 22px;
      left: 1rem;
      position: absolute;
      z-index:2;
    }  
    .title{
      font-size: 28px;
      text-transform: uppercase;
      text-align: center;
      position: absolute;
      width:100%;
      margin: 0 auto;
      z-index:1;
    }
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 800px) {
    /* padding: 0rem 1.5rem; */
    margin: 0 auto;

    .nav-bar {
      
    }

    .items {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.6rem;
      margin: 0 auto;
      margin-bottom:1.3rem;

      & > div {
        margin-bottom:0;
      }
    }
  }

`;
