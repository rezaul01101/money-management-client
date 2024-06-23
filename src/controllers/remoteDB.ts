import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
// import constants from "@/src/theme/constants";
const baseUrl: string = 'http://localhost:3001/api/v1';

export async function postRequest(
  data: object,
  url: string,
  token: boolean | string = false
) {
  // console.log('requestToken :',token);
  try {
    let headerData: any =
      token !== false
        ? {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        : { Accept: "application/json", "Content-Type": "application/json" };
    const config: AxiosRequestConfig = {
      method: "post",
      url: baseUrl + url,
      headers: headerData,
      data: data,
    };
    let response: AxiosResponse = await axios(config);
    return response;
  } catch (error) {
    // console.log("SERVER REQUEST ERROR! Request:", data, "Error:", error);
    return "Network Error";
  }
}
export async function getRequest(url: string, token: boolean | string = false) {
  // console.log('requestToken :',token);
  try {
    let headerData: any =
      token !== false
        ? {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        : { Accept: "application/json", "Content-Type": "application/json" };
    const config: AxiosRequestConfig = {
      method: "get",
      url: baseUrl + url,
      headers: headerData,
    };
    let response: AxiosResponse = await axios(config);
    return response;
  } catch (error) {
    //  console.log("SERVER REQUEST ERROR! Request:", url, "Error:", error);
    return "Network Error";
  }
}

