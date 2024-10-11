import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";
import AuthRoute from "./AuthRoute";
import AdminRoute from "./AdminRoute";

function HomeRoute(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </>
  );
}

export default HomeRoute;
