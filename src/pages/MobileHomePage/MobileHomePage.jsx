/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import background from "../../assets/img/background2.jpg";
import { useEffect, useState } from "react";

function MobileHomePage(props) {
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
      <div css={s.layout}>
        <div css={s.container}>
         
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default MobileHomePage;
