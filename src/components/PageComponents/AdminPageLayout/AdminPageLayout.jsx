/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import DesktopHeader from "../Header/DesktopHeader/DesktopHeader";
import MobileHeader from "../Header/MobileHeader/MobileHeader";
import MobileSideBar from "../SideBar/MobileSideBar/MobileSideBar";
import DesktopSideBar from "../SideBar/DesktopSideBar/DesktopSideBar";

function AdminPageLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 1);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  return (
    <div css={s.layout}>
      {isMobile ? (
        <>
          <MobileHeader toggleSidebar={toggleSidebar} />
          <MobileSideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <>
          <DesktopHeader
            toggleSidebar={toggleSidebar}
            isScrolled={isScrolled}
          />{" "}
          {/* 스크롤 여부 전달 */}
          <DesktopSideBar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </>
      )}
      <div css={s.container}>{children}</div>
    </div>
  );
}

export default AdminPageLayout;
