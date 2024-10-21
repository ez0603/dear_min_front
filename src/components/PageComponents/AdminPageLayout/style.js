import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const container = (isScrolled, isMobile) => css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${!isMobile && isScrolled ? "80px" : !isMobile ? "250px" : "0px"};
  transition: margin-top 0.3s ease;
`;
