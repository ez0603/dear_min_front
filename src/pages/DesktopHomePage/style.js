import { css } from "@emotion/react";

export const layout = (isScrolled) => css`
  box-sizing: border-box;
  width: 100%;
  height: ${isScrolled ? "calc(100% - 80px" : "calc(100% - 250px"};
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aqua;
`;

export const background = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`;
