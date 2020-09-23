import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    text-transform: uppercase;
    margin: 0 0 25px;
    cursor: pointer;
    position: relative;

    .nav-icon {
      font-size: 22px;
      top: -4px;
      position: relative;
    }
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;
