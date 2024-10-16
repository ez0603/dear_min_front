import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileHomePage from "../pages/MobileHomePage/MobileHomePage";
import DesktopHomePage from "../pages/DesktopHomePage/DesktopHomePage";

function AdminRoute(props) {
  const isMobile = window.innerWidth < 700;

  return (
    <Routes>
        {isMobile ? (
          <Route path="/home" element={<MobileHomePage />} />
        ) : (
          <Route path="/home" element={<DesktopHomePage />} />
        )}
    </Routes>
  );
}

export default AdminRoute;
