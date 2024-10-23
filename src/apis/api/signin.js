import instance from "../utils/instance";

export const adminSigninRequest = async (data) => {
  const response = await instance.post("/admin/auth/signin", data);
  return response;
};

export const searchFirebaseAuthenticationRequest = async (data) => {
  return await instance.post("/createUserd", data);
};
