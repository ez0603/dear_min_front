import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: 250px;
  position: fixed;
  top: 0;
  z-index: 98;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const topLayout = css`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const menuButton = css`
  position: absolute;
  top: -30px;
  left: 40px;
  transform: translateY(-100%);
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
    cursor: pointer;
  }
`;

export const categoryLayout = css`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  padding: 5px 0;
`;

export const category = css`
  width: 80%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: nowrap;
`;

export const list = css`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  padding: 0;
  margin: 0;
  font-weight: 300;

  li {
    cursor: pointer;
    display: inline-block;
  }
`;

export const listItem = css`
  padding: 10px;
  position: relative;
  transition: background-color 0.3s ease-in-out;

  :hover {
    color: #7e6d5a;
    font-weight: 700;
  }
`;

export const arrowButton = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 5px;
  z-index: 99;
  background-color: transparent;

  :hover {
    color: #7e6d5a;
  }
`;

export const left = css`
  left: 6%;
`;

export const right = css`
  right: 6%;
`;
