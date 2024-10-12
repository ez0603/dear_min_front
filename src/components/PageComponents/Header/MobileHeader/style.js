import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 98;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const menuButton = css`
  position: absolute;
  top: 35px;
  left: 20px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  color: #333;
  cursor: pointer;
`;

export const logoLayout = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    cursor: pointer;
  }
`;
