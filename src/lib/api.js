/**
 * Function to retrieve information about Torre user
 * @param id - ID of the user being searched for on Torre
 * @returns - JSON body of HTTP Response object
 */
const fetchUser = async (id) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}/user/${id}`;
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

/**
 * Function to retrieve user details regarding specific skill
 * @param  user_id - User ID from which to retrieve details
 * @param  skill_id - Skill ID from which to retrieve details
 * @returns - JSON body of HTTP Response object
 */
const fetchRelatedExperiences = async (user_id, skill_id) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}/user/${user_id}/skill/${skill_id}`;
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

/**
 * Function to search and retrieve list of users that have proficiency on some skill
 * @param skill_name - Name of the skill we are trying to find in users
 * @param proficiency - Proficiency of the skill we are trying to find in users
 * @returns - JSON body of HTTP Response object
 */
const fetchUsersWithSimilarSkill = async (skill_name, proficiency) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}/search/users/skill/${skill_name}/proficiency/${proficiency}`;

  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export { fetchUser, fetchRelatedExperiences, fetchUsersWithSimilarSkill };
