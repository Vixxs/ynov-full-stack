/** Server URL */
export const urlApi = "/api";
export const urlApiUser = `${urlApi}/.user`;
export const urlApiUserLogin = `${urlApiUser}/login`;
export const urlApiUserInfo = `${urlApiUser}/user`;
export const urlApiUserList = `${urlApiUser}/users`;
export const urlApiAdminInfo = `${urlApiUser}/admin`;
export const urlApiFutureUserList = `${urlApiUser}/future-users`;
export const urlApiCheckRole = `${urlApiUser}/checkRole`;
export const urlApiRegistration = `${urlApiUser}/inscription`;
export const urlApiValidateRegistration = `${urlApiUser}/inscription/valide-user/:id`;

/** Service User */
export const urlServerServiceUser = "http://nginx/api";
export const endPointServiceUserHello = `${urlServerServiceUser}/hello`;
export const endPointServiceUserLogin = `${urlServerServiceUser}/login_check`;
export const endPointServiceUserInfo = `${urlServerServiceUser}/user`;
export const endPointServiceUserList = `${endPointServiceUserInfo}/users`;
export const endPointServiceUserAdminInfo = `${urlServerServiceUser}/admin`;
export const endPointServiceFutureUserList = `${urlServerServiceUser}/future-users`;
export const endPointServiceUserCheckRole = `${endPointServiceUserInfo}/check_role`;
export const endPointServiceUserRegistration = `${urlServerServiceUser}/inscription/`;
export const endPointServiceUserValidateRegistration = `${endPointServiceUserRegistration}valide-user/`;

export const urlsAcceptedWithoutConnection = [
  urlApi,
  urlApiUser,
  urlApiUserLogin,
  urlApiRegistration,
];
