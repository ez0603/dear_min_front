import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  cursor: default;
`;

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const categoryLayout = css`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const categoryContainer = css`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    position: relative;
    top: 32px;
    font-size: 19px;
    margin: 0;
    color: white;
    font-weight: 300;
  }

  img {
    width: 90%;
    height: 220px;
    max-width: 210px;
    cursor: pointer;
  }
`;
