import { Route, Routes } from "react-router-dom";
import DesktopHomePage from "../pages/DesktopPage/DesktopHomePage/DesktopHomePage";
import DesktopCategoryPage from "../pages/DesktopPage/DesktopCategoryPage/DesktopCategoryPage";
import DesktopProductDetailPage from "../pages/DesktopPage/DesktopProductDetailPage/DesktopProductDetailPage";
import DesktopProductAddPage from "../pages/DesktopPage/DesktopProductAddPage/DesktopProductAddPage";
import DesktopOptionPage from "../pages/DesktopPage/DesktopOptionPage/DesktopOptionPage";

function DesktopRoute() {
  return (
    <Routes>
      <Route path="/home" element={<DesktopHomePage />} />
      <Route path="/category/:categoryId" element={<DesktopCategoryPage />} />
      <Route
        path="/product/:productId"
        element={<DesktopProductDetailPage />}
      />
      <Route path="/product/add" element={<DesktopProductAddPage />} />
      <Route path="/option" element={<DesktopOptionPage />} />
    </Routes>
  );
}

export default DesktopRoute;
