/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import AuthPageInput from "../../components/AuthPage/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import { adminSigninRequest } from "../../apis/api/signin";
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";

function AdminLoginPage(props) {
  const [username, userNameChange] = useInput();
  const [password, passwordChange] = useInput();
  const navigate = useNavigate();

  const handleSigninClick = () => {
    adminSigninRequest({
      username,
      password,
    })
      .then((response) => {
        const accessToken = response.data;
        localStorage.setItem("AccessToken", accessToken);
        navigate("/admin/home");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSigninClick();
    }
  };

  return (
    <PageLayout>
      <div css={s.loginLayout}>
        <div css={s.loginContainer}>
          <div css={s.header}>
            <h1>Admin LogIn</h1>
          </div>
          <div css={s.input}>
            <AuthPageInput
              type={"text"}
              name={"username"}
              placeholder={"아이디"}
              value={username}
              onChange={userNameChange}
              onKeyPress={handleKeyPress}
            />
            <AuthPageInput
              type={"password"}
              name={"password"}
              placeholder={"비밀번호"}
              value={password}
              onChange={passwordChange}
              onKeyPress={handleKeyPress}
            />
            <button css={s.signinButton} onClick={handleSigninClick}>
              로그인
            </button>
            <div css={s.search}>
              <Link to={"/auth/search/username"} css={s.link}>
                아이디 찾기
              </Link>
              <Link to={"/auth/search/password"} css={s.link}>
                비밀번호 찾기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AdminLoginPage;
