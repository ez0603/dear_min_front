/** @jsxImportSource @emotion/react */
import { IoMenu } from "react-icons/io5";
import * as s from "./style";

function MobileHeader({ toggleSidebar }) {
  return (
    <div css={s.layout}>
      <button onClick={toggleSidebar} css={s.menuButton}>
        <IoMenu size={35} />
      </button>
    </div>
  );
}

export default MobileHeader;
