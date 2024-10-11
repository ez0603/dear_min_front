/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import * as s from "./style";

function AdminPageLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
}

export default AdminPageLayout;
