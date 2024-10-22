import { Route, Routes } from "react-router-dom";
import MobileHomePage from "../pages/MobilePage/MobileHomePage/MobileHomePage";
import MobileCategoryPage from "../pages/MobilePage/MobileCategoryPage/MobileCategoryPage";

function MobileRoute() {
  return (
    <Routes>
      <Route path="/home" element={<MobileHomePage />} />
      <Route path="/category/:categoryId" element={<MobileCategoryPage />} />
    </Routes>
  );
}

export default MobileRoute;
