import instance from "../utils/instance";

export const searchAdminnameByEmailRequest = async (data) => {
    return await instance.post("/mail/send/admin/id", data);
}

export const searchAdminPasswordByEmailRequest = async (data) => {
    return await instance.post("/mail/send/temporary/admin/password", data);
}