import { css } from "@emotion/react";

export const userPasswordLayout = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const userPasswordContainer = css`
  box-sizing: border-box;
  background-color: white;
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;

  & h1 {
    font-size: 35px;
    margin: 5px 0 10px 0;
    cursor: default;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const header = css`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: default;

  &::after {
    content: '';
    display: block;
    height: 15px; 
  }
  & h1 {
    font-size: 23px;
    margin: 5px 0 10px 0;
    margin-bottom: 20px;
    cursor: default;
  }
  & h3 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 300;
  }
`;

export const input = css`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const button = (isFormValid) => css`
  box-sizing: border-box;
  border: none;
  height: 50px;
  width: 80%;
  margin: 15px 0;
  background-color: ${isFormValid ? "#4cb5f9" : "#B2DFFC"};
  border-radius: 8px;
  color: white;
  cursor: ${isFormValid ? "pointer" : "default"};

  &:hover {
    background-color: ${isFormValid ? "#4494fc" : "#B2DFFC"};
    color: ${isFormValid ? "#c2dbff" : "white"};
  }
  &:active {
    background-color: ${isFormValid ? "#1071fa" : "#B2DFFC"};
  }

  a {
    text-decoration: none;
    padding: 5px;
  }
  a:link {
    color: #333333;
  }
  a:visited {
    color: #333333;
  }
  a:hover {
    color: #c2dbff;
  }
`;
