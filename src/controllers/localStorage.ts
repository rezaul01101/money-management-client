const storageAccessKey = "access_key";
const storageRefreshKey = "access_key";
export async function saveTokenInLocalStorage(userData: object) {
  //check data exist
  if (!userData) {
    return false;
  }
  try {
    const loggedIn = JSON.stringify(userData);

    localStorage.setItem("storageAccessKey", loggedIn);
    localStorage.setItem("storageRefreshKey", loggedIn);
    return true;
  } catch (e) {
    // console.log("Save Error: " + e);
    return false;
  }
}
