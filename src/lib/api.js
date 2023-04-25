const fetchUser = async (id) => {
  const BASE_URL =
    "https://tranquil-thicket-22159.herokuapp.com/http://torre.bio/api/bios/";
  const response = await fetch(`${BASE_URL}${id}`);
  const data = await response.json();
  return data;
};

export { fetchUser };
