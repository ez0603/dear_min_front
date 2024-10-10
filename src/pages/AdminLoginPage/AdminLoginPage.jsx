/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import AuthPageInput from "../../components/AuthPage/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import { adminSigninRequest } from "../../apis/api/signin";

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
        window.location.replace("/admin/main");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  // Enter 키를 누르면 로그인 처리
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSigninClick();
    }
  };

  return (
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
            onKeyPress={handleKeyPress} // Enter 키 이벤트 추가
          />
          <AuthPageInput
            type={"password"}
            name={"password"}
            placeholder={"비밀번호"}
            value={password}
            onChange={passwordChange}
            onKeyPress={handleKeyPress} // Enter 키 이벤트 추가
          />
          <button css={s.signinButton} onClick={handleSigninClick}>
            로그인
          </button>
          <div css={s.search}>
            <Link to={"/auth/search/adminName"} css={s.link}>
              아이디 찾기
            </Link>
            <Link to={"/auth/search/adminPassword"} css={s.link}>
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
