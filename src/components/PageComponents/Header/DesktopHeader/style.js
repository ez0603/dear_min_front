import { css } from "@emotion/react";

export const layout = (isScrolled) => css`
  width: 100%;
  height: ${isScrolled ? "80px" : "250px"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: ${isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease;
`;

export const topLayout = css`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const menuButton = (isScrolled) => css`
  position: absolute;
  top: ${isScrolled ? "50px" : "-30px"};
  left: 40px;
  transform: translateY(-100%);
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
`;

export const logoLayout = (isScrolled) => css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: ${isScrolled ? "none" : "flex"};
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
  }
  transition: all 0.3s ease;
`;

export const categoryLayout = (isScrolled) => css`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  top: ${isScrolled ? "0px" : "95px"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${isScrolled ? "none" : "1px solid #dbdbdb"};
  border-left: none;
  border-right: none;
  padding: 5px 0;
  transition: all 0.3s ease;

  @media (max-width: 1200px) and (min-width: 700px) {
    width: 85%;
    border: none;
    left: 10px;
  }
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
  justify-content: center;
  gap: clamp(30px, 10vw, 50px);
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
  left: 7%;

  @media (max-width: 1200px) and (min-width: 700px) {
    left: 5%;
  }
`;

export const right = css`
  right: 6%;

  @media (max-width: 1200px) and (min-width: 700px) {
    right: 3%;
  }
`;
