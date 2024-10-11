/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoMenu } from "react-icons/io5";

function Header({ toggleSidebar }) {
  return (
    <div css={s.layout}>
      <button onClick={toggleSidebar} css={s.menuButton}>
        <IoMenu size={35}/>
      </button>
    </div>
  );
}

export default Header;
