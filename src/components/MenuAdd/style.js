import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const editLayout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  overflow-y: auto;
`;

export const editButton = css`
  width: 100%;
  height: 40px;
`;
