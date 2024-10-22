import { Route, Routes } from "react-router-dom";
import DesktopHomePage from "../pages/DesktopPage/DesktopHomePage/DesktopHomePage";
import DesktopCategoryPage from "../pages/DesktopPage/DesktopCategoryPage/DesktopCategoryPage";
import DesktopProductDetailPage from "../pages/DesktopPage/DesktopProductDetailPage/DesktopProductDetailPage";

function DesktopRoute() {
  return (
    <Routes>
      <Route path="/home" element={<DesktopHomePage />} />
      <Route path="/category/:categoryId" element={<DesktopCategoryPage />} />
      <Route path="/product/:productId" element={<DesktopProductDetailPage />} />
    </Routes>
  );
}

export default DesktopRoute;
