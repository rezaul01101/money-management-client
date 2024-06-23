import { userRegisterType } from "@/theme/interfaces";
import { postRequest } from "./remoteDB";

/***
 * Login API
 */
export async function onLogin(isLoading: any, email: string, password: string) {
  isLoading(true);
  let body = { email: email, password: password };
  //console.log('login',body);
  let response = await postRequest(body, "login");
  //console.log(response);
  if (response) {
    isLoading(false);
    return response;
  } else {
    isLoading(false);
    return false;
  }
}
/***
 * Register API
 */
export async function userRegister( data:userRegisterType) {

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
