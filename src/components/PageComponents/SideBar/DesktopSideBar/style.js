import { css, keyframes } from "@emotion/react";

const dropdownSlideIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px; 
    opacity: 1;
  }
`;

const dropdownSlideOut = keyframes`
  from {
    max-height: 500px; 
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(230, 230, 230, 0.418);
  z-index: 98;
`;

export const layout = css`
  width: 300px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 99;
  cursor: default;

  @media (max-width: 700px) {
    width: 80%;
    height: 100%;
  }
`;

export const open = css`
  animation: ${slideIn} 0.3s forwards;
`;

export const closed = css`
  animation: ${slideOut} 0.3s forwards;
`;

export const closeButton = css`
  position: absolute;
  right: 15px;
  top: 10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const menuList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

export const menuItem = css`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 20px 0 0 0;
`;

export const link = css`
  width: 85%;
  display: flex;
  padding: 15px 0 10px 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  justify-content: space-between;

  :hover {
    color: #0071e3;
  }
`;

export const dropdown = css`
  width: 75%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  animation: ${dropdownSlideIn} 0.3s ease-in-out forwards;
`;

export const dropdownClosing = css`
  animation: ${dropdownSlideOut} 0.3s ease-in-out forwards;
`;

export const dropdownItem = css`
  padding: 15px 0;
`;

export const dropLink = css`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 300;
  justify-content: space-between;
  :hover {
    color: #0071e3;
  }
`;
