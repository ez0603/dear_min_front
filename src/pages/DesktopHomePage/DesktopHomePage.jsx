/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import background from "../../assets/img/background.jpg";
import { useEffect, useState } from "react";

function DesktopHomePage(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AdminPageLayout>
      <div css={s.layout(isScrolled)}>
        <div css={s.container}>
          <div css={s.background}>
            <img src={background} alt="background" />
          </div>
          <div>fsdfsdfsdfsd</div>
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default DesktopHomePage;
