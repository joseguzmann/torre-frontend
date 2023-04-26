/**
 * @param id - ID of the user being searched for on Torre
 * @returns - JSON body of HTTP Response object
 */
const fetchUser = async (id) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}http://torre.bio/api/bios/`;
  const response = await fetch(`${BASE_URL}${id}`);
  const data = await response.json();
  return data;
};

/**
 * @param  user_id - User ID from which to retrieve experiences
 * @param  skill_id - Skill ID from which to retrieve experiences
 * @returns - JSON body of HTTP Response object
 */
const fetchRelatedExperiences = async (user_id, skill_id) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}https://torre.co/api/genome/bios/${user_id}/strengths-skills/${skill_id}/detail`;
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

/**
 *
 * @param skill_id - Name of the skill we are trying to find in users
 * @param proficiency - Proficiency of the skill we are trying to find in users
 * @returns - JSON body of HTTP Response object
 */
const fetchUsersWithSimilarSkill = async (skill_id, proficiency) => {
  const PROXY_URL = process.env.REACT_APP_CORS_PROXY;
  const BASE_URL = `${PROXY_URL}https://search.torre.co/people/_search`;

  const bodyData = {
    and: [
      { "skill/role": { text: `${skill_id}`, proficiency: `${proficiency}` } },
    ],
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  };

  const response = await fetch(BASE_URL, requestOptions);
  const data = await response.json();
  return data;
};

export { fetchUser, fetchRelatedExperiences, fetchUsersWithSimilarSkill };
