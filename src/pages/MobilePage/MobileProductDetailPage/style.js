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
  margin-top: 100px;
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

export const backButton = css`
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const editButton = css`
  width: 100%;
  height: 40px;
`;

export const productLayout = css`
  width: 100%;
  height: 100%;

  img {
    width: 30%;
    height: 40%;
  }
`;
