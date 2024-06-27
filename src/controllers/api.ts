import { userLoginType, userRegisterType } from "@/theme/interfaces";
import { postRequest } from "./remoteDB";

/***
 * Login API
 */
export async function onLogin(data: userLoginType) {
  let body = data;
  let response = await postRequest(body, "/auth/login");
  if (response) {
    const serverRes = response;
    console.log("response", serverRes);

    // saveTokenInLocalStorage
    return serverRes;
  } else {
    return false;
  }
}
/***
 * Register API
 */
export async function userRegister(data: userRegisterType) {
  let body = data;
  //console.log('login',body);
  let response = await postRequest(body, "/auth/register");
  //console.log(response);
  if (response) {
    return response;
  } else {
    return false;
  }
}
