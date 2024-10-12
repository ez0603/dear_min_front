/** @jsxImportSource @emotion/react */
import { FiMenu } from "react-icons/fi";
import * as s from "./style";

function MobileHeader({ toggleSidebar }) {
  return (
    <div css={s.layout}>
      <button onClick={toggleSidebar} css={s.menuButton}>
        <FiMenu size={35} />
      </button>
    </div>
  );
}

export default MobileHeader;
