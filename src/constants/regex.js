export const REGEX = {
  username: {
    regexr: /^[A-Za-z0-9]{4,15}$/, // 아이디는 4 ~ 15자리의 영문자와 숫자만 허용
    text: "아이디는 영문자, 숫자 4 ~ 15자리 형식이어야 합니다",
  },
  password: {
    regexr: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,128}$/, // 영문자와 숫자를 포함한 7 ~ 128자리
    text: "비밀번호는 영문자와 숫자를 포함한 7 ~ 128자리 형식이어야 합니다",
  },
  adminName: {
    regexr: /^[가-힣a-zA-Z\s]{2,25}$/, // 한글, 영문자 및 공백을 포함한 2 ~ 25자
    text: "이름에는 숫자, 특수문자가 들어갈 수 없습니다. 2 ~ 25자 형식이어야 합니다",
  },
  email: {
    regexr: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,3}$/, // 이메일 형식 허용
    text: "이메일 형식이어야 합니다",
  },
  newPassword: {
    regexr: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,128}$/, // 영문자와 숫자를 포함한 7 ~ 128자리
    text: "비밀번호는 영문자와 숫자를 포함한 7 ~ 128자리 형식이어야 합니다",
  },
  oldPassword: {
    regexr: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,128}$/, // 영문자와 숫자를 포함한 7 ~ 128자리
    text: "비밀번호는 영문자와 숫자를 포함한 7 ~ 128자리 형식이어야 합니다",
  },
};
