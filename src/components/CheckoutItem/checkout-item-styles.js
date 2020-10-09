import styled from "styled-components/macro";

export default styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
      font-size: 1rem;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {

    .image-container,
    .name,
    .quantity,
    .price,
    .remove-button
    {
      width: unset;
    }    

    .image-container {
      grid-area: image;

    }    

    .name {
      justify-self: start;
      font-weight: bold;
    }

    .quantity{
      justify-self: start;
      align-self: start;
    }

    .price {
      justify-self: end;
      align-self: end;
    }

    .remove-button {
      padding-left: unset;
      align-self: start;
      justify-self: end;
    }  

    /** GRID DEFINITION */

    .name {
      grid-area: name;
    }

    .quantity {
      grid-area: quantity;
    }
    .price {
      grid-area: price;
    }
    .remove-button {
      grid-area: remove;
    }    

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "image name name remove"
    "image quantity . ."
    "image quantity price price"; 
  }

`;
