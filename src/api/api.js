const URLS = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
};

const getData = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const createLinkForRequest = (objAttributes, url) => {
  const searchParams = new URLSearchParams(objAttributes);

  return url + searchParams.toString();
};

const getCharacters = (objAttributes, url = URLS.characters + '/?') => {
  const createdUrl = createLinkForRequest(objAttributes, url);
  const data = getData(createdUrl);

  return data;
};

const getEpisodes = (objAttributes, url = URLS.episodes + '/?') => {
  const createdUrl = createLinkForRequest(objAttributes, url);
  const data = getData(createdUrl);

  return data;
};

const getLocations = (objAttributes, url = URLS.locations + '/?') => {
  const createdUrl = createLinkForRequest(objAttributes, url);
  const data = getData(createdUrl);

  return data;
};

export { getCharacters, getEpisodes, getLocations };
