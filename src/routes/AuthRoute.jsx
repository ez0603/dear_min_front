import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useQueryClient } from "react-query";
import SearchUserNamePage from "../pages/AuthPage/SearchUserNamePage/SearchUserNamePage";
import SearchPasswordPage from "../pages/AuthPage/SearchPasswordPage/SearchPasswordPage";

function AuthRoute() {
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData("principalQuery");

  useEffect(() => {
    if (!!principalData) {
      alert("잘못된 접근입니다. (토큰이 있음)");
      window.location.replace("/");
    }
  }, [principalData]);

  return (
    <Routes>
      <Route path="/search/username" element={<SearchUserNamePage />} />
      <Route path="/search/password" element={<SearchPasswordPage />} />
    </Routes>
  );
}

export default AuthRoute;
