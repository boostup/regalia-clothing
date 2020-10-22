import styled, { css } from "styled-components/macro";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  border: none;
  background-image: url(https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg);
  background-position: 1rem center;
  background-repeat: no-repeat;

  @media screen and (min-width: 800px) {
    background-position: 0.6rem center;
  }

  &:hover {
    color: white;
    background-color: #2f72dc;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyle : buttonStyles;
};

export default styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
`;
