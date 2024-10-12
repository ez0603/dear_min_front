/** @jsxImportSource @emotion/react */
import { FiMenu } from "react-icons/fi";
import * as s from "./style";
import logo from "../../../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";

function MobileHeader({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/admin/home");
  };

  return (
    <div css={s.layout}>
      <button onClick={toggleSidebar} css={s.menuButton}>
        <FiMenu size={30} />
      </button>
      <div css={s.logoLayout} onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default MobileHeader;
