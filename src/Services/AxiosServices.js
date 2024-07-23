import axios from 'axios';

// DICTIONARY START
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
// DICTIONARY END 

// FOOTBALL START 
// const FOOTBALL_BASE_URL = "https://api.sportmonks.com/v3/football/";
const FOOTBALL_BASE_URL = "http://localhost:8080/api";
const FOOTBALL_V3_TOKEN = "BDdRql6xol73Lih9y8TJJNj3AD0EKDJPCHSH20JCayWD15YGD8cDgiZBNDt7";

const footballInstance = axios.create({
  baseURL: FOOTBALL_BASE_URL,
  headers: {
    "Authorization": FOOTBALL_V3_TOKEN
  }
});

// export const FootballGet = (url) => {
//   return footballInstance.get(url);
// };

// export const FootballPost = (url, payload) => {
//   return footballInstance.post(url, payload);
// };
export const FootballInstanceGet = (endPoint) => {
  footballInstance.get('/v3/football/leagues')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
} 
// FOOTBALL END  


