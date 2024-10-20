import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MobileHomePage from "../pages/MobileHomePage/MobileHomePage";
import DesktopHomePage from "../pages/DesktopHomePage/DesktopHomePage";

function AdminRoute(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

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
