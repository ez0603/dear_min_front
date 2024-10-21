import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
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

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h1,
  h2,
  h3 {
    margin: 5px 0;
  }
`;
