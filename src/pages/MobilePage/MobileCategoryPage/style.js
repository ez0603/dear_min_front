import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  cursor: default;
`;

export const container = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 3vw, 30px) 0;
  overflow: hidden;
  padding-bottom: 50px;

  p {
    padding: 30px;
  }
`;

export const categoryTitle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  margin: 0 0 clamp(10px, 8vw, 20px) 0;
`;

export const searchContainer = css`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin-bottom: clamp(10px, 10vw, 20px);
`;

export const searchIcon = css`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const searchInputClosed = css`
  width: 0;
  opacity: 0;
  padding: 8px;
  font-size: clamp(14px, 5vw, 16px);
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: width 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
`;

export const searchInputOpen = css`
  width: 60%;
  opacity: 1;
  padding: 8px;
  font-size: clamp(14px, 5vw, 16px);
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: width 0.3s ease, opacity 0.3s ease;
`;

export const productLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const productContain = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 90%;
  padding-top: clamp(10px, 5vw, 15px);
  justify-items: center;
`;

export const productCard = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-align: center;
`;

export const imageContainer = css`
  position: relative;
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    max-height: 200px;
    margin-bottom: 10px;
    transition: opacity 0.3s ease, filter 0.3s ease;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: clamp(18px, 1vw, 20px);
    font-weight: 700;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  :hover p {
    opacity: 1;
  }
`;

export const textBox = css`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  h1 {
    margin: 10px 0 7px 0;
    font-size: clamp(20px, 3vw, 24px);
    font-weight: 500;
  }

  h2 {
    margin: 5px 0;
    font-size: clamp(14px, 3vw, 20px);
    font-weight: 400;
  }

  h3 {
    margin: 5px 0;
    font-size: clamp(12px, 3vw, 16px);
    font-weight: 300;
  }
`;

export const scrollTopButton = css`
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 2.5rem;
  color: #252525;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
