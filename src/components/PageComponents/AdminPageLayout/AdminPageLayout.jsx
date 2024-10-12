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

  return (
    <div css={s.layout}>
      <div css={s.container}>
        {isMobile ? (
          <>
            <MobileHeader toggleSidebar={toggleSidebar} />
            <MobileSideBar
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </>
        ) : (
          <>
            <DesktopHeader toggleSidebar={toggleSidebar} />
            <DesktopSideBar
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </>
        )}
        {children}
      </div>
    </div>
  );
}

export default AdminPageLayout;
