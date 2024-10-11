import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";
import AdminRouter from "./AuthRoute";

function HomeRoute(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/auth/*" element={<AdminRouter />} />
      </Routes>
    </>
  );
}

export default HomeRoute;
