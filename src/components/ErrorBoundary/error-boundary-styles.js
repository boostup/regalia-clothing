import styled from "styled-components/macro";

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;

  @media screen and (max-width: 800px) {
    width: 20vh;
    height: 20vh;
  }
`;

export const ErrorImageText = styled.div`
  font-size: 1.8rem;
  color: #2f8e89;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
`;
