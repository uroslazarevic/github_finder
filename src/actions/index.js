import { githubAPI } from 'utils';

export const GET_PROFILES = 'GET_PROFILES';

export const searchGithubProfiles = searchTerm => async dispatch => {
  const payload = await githubAPI.searchGithubProfiles(searchTerm);

  dispatch({
    type: GET_PROFILES,
    payload,
  });

  return payload;
};
