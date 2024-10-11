/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Header({ toggleSidebar }) {
  return (
    <div css={s.layout}>
      <button onClick={toggleSidebar}>메뉴</button>
    </div>
  );
}

export default Header;
