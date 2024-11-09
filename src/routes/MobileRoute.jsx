import { Route, Routes } from "react-router-dom";
import MobileHomePage from "../pages/MobilePage/MobileHomePage/MobileHomePage";
import MobileCategoryPage from "../pages/MobilePage/MobileCategoryPage/MobileCategoryPage";
import MobileProductDetailPage from "../pages/MobilePage/MobileProductDetailPage/MobileProductDetailPage";

function MobileRoute() {
  return (
    <Routes>
      <Route path="/home" element={<MobileHomePage />} />
      <Route path="/category/:categoryId" element={<MobileCategoryPage />} />
      <Route path="/product/:productId" element={<MobileProductDetailPage />} />
    </Routes>
  );
}

export default MobileRoute;
