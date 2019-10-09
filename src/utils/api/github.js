const BASE_URL = 'https://api.github.com';

const AUTH_TOKEN = '3d87f6ba7b8a97d28bedd66e8dcf86e3c45b363f';
const headers = new Headers({
  Accept: 'application/vnd.github.v3.full+json',
  Authorization: `${AUTH_TOKEN} OAUTH-TOKEN`,
});

const searchGithubProfiles = async searchTerm => {
  const request = await fetch(`${BASE_URL}/search/users?q=${searchTerm}&per_page=10`, {
    headers,
  });
  const payload = await request.json();

  return payload;
};

const getProfileDetails = async username => {
  const request = await fetch(`${BASE_URL}/users/${username}`, {
    headers,
  });
  const payload = await request.json();
  return payload;
};

export { searchGithubProfiles, getProfileDetails };
