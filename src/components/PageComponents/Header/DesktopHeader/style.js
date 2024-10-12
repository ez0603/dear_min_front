import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: 200px;
  position: fixed;
  top: 0;
  z-index: 98;
  cursor: default;
`;

export const menuButton = css`
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  top: 15px;
  left: 15px;
  position: relative;
  color: #333;
  cursor: pointer;
`;

export const categoryLayout = css`
  width: 100%;
  position: relative;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

export const category = css`
  width: 90%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: aqua;
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

  li {
    cursor: pointer;
    display: inline-block;
  }
`;

export const listItem = css`
  padding: 10px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #dbdbdb;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  :hover::after {
    visibility: visible;
    width: 100%;
  }
`;

export const arrowButton = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  z-index: 99;
  background-color: transparent;
`;

export const left = css`
  left: 3%;
`;

export const right = css`
  right: 3%;
`;
