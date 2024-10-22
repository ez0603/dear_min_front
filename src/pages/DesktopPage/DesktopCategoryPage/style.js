import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const container = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 4vw, 30px) 0;
  overflow: hidden;

  p {
    padding: 30px;
  }
`;

export const productLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

export const productContain = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px;
  width: 90%;
  padding: 0 30px;
  justify-items: center;
`;

export const productCard = css`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  h1 {
    margin: 5px 0;
    font-size: clamp(20px, 3vw, 25px);
  }

  h2 {
    margin: 7px 0;
    font-size: clamp(15px, 3vw, 20px);
  }

  h3 {
    margin: 5px 0;
    font-size: clamp(8px, 3vw, 15px);
  }
`;

export const imageContainer = css`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: opacity 0.3s ease, filter 0.3s ease;

    :hover {
      cursor: pointer;
      opacity: 0.8;
      filter: brightness(50%);
    }
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
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
