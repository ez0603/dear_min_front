import { Route, Routes } from "react-router-dom";
import MobileHomePage from "../pages/MobilePage/MobileHomePage/MobileHomePage";
import DesktopHomePage from "../pages/DesktopPage/DesktopHomePage/DesktopHomePage";
import MobileCategoryPage from "../pages/MobilePage/MobileCategoryPage/MobileCategoryPage";
import DesktopCategoryPage from "../pages/DesktopPage/DesktopCategoryPage/DesktopCategoryPage";
import { useEffect, useState } from "react";

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
        <>
          <Route path="/home" element={<MobileHomePage />} />
          <Route
            path="/category/:categoryId"
            element={<MobileCategoryPage />}
          />
        </>
      ) : (
        <>
          <Route path="/home" element={<DesktopHomePage />} />
          <Route
            path="/category/:categoryId"
            element={<DesktopCategoryPage />}
          />
        </>
      )}
    </Routes>
  );
}

export default AdminRoute;
