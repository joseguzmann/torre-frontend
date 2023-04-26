/**
 * @param id - Id of user that will be found on Torre
 * @returns - JSON body of HTTP Response object
 */
const fetchUser = async (id) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}http://torre.bio/api/bios/`;
  const response = await fetch(`${BASE_URL}${id}`);
  const data = await response.json();
  return data;
};

export { fetchUser };
