import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";

function HomeRoute(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLoginPage />} />
      </Routes>
    </>
  );
}

export default HomeRoute;
