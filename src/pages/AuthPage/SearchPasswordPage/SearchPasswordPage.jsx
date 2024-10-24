/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import AuthPageInput from "../../../components/AuthPage/AuthPageInput/AuthPageInput";
import { CiLock } from "react-icons/ci";
import { searchAdminPasswordByEmailRequest } from "../../../apis/api/account";
import { useInput } from "../../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";

function SearchPasswordPage(props) {
  const [username, userNameChange, usernameMessage] = useInput("username");
  const [email, emailChange, emailMessage] = useInput("email");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(username.trim() !== "" && email.trim() !== "");
  }, [username, email]);

  const searchAdminPasswordByEmailMutation = useMutation({
    mutationKey: "searchAdminPasswordByEmailRequest",
    mutationFn: searchAdminPasswordByEmailRequest,
    retry: 0,
    onSuccess: (response) => {
      if (response.data === false) {
        alert("해당 사용자가 존재하지 않습니다");
        return;
      }
      alert("해당 메일로 임시비밀번호를 전송하였습니다.");
      navigate("/");
    },
    onError: (error) => {
      alert(error.response.data);
    },
  });

  const handleEmailSendClick = () => {
    if (window.confirm("메일을 전송할까요?")) {
      searchAdminPasswordByEmailMutation.mutate({
        username: username,
        email: email,
      });
    }
  };

  return (
    <AdminPageLayout>
      <div css={s.userPasswordLayout}>
        <div css={s.userPasswordContainer}>
          <div css={s.header}>
            <span>
              <CiLock size={80} />
            </span>
            <h1>비밀번호 찾기</h1>
            <h3>
              아이디, 이메일 주소을 입력하시면 이메일로 임시 비밀번호를
              보내드립니다.
            </h3>
          </div>
          <div css={s.input}>
            <AuthPageInput
              type={"text"}
              name={"username"}
              placeholder={"아이디"}
              value={username}
              onChange={userNameChange}
              message={usernameMessage}
            />
            <AuthPageInput
              type={"text"}
              name={"email"}
              placeholder={"이메일"}
              value={email}
              onChange={emailChange}
              message={emailMessage}
            />
            <button
              onClick={handleEmailSendClick}
              css={s.button(isFormValid)}
              disabled={!isFormValid}
            >
              메일 전송
            </button>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default SearchPasswordPage;
