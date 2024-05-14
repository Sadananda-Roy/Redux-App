import axios from 'axios';

const DICTIONARY_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const dictionaryInstance = axios.create({
  baseURL: DICTIONARY_BASE_URL
});

export const DictGet = (url) => {
  return dictionaryInstance.get(url);
};


export const DictPost = (url, payload) => {
return dictionaryInstance.post(url, payload);
};

