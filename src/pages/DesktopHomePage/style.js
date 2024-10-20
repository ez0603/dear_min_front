import { css } from "@emotion/react";

export const layout = (isScrolled) => css`
  box-sizing: border-box;
  width: 100%;
  height: ${isScrolled ? "calc(100% - 80px)" : "calc(100% - 250px)"};
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const background = (isScrolled) => css`
  width: 100%;
  height: 100%;
  margin-top: ${isScrolled ? "80px" : "250px"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const test = css`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;
