import axios from 'axios';

// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.football-data.org/v4';
// const BASE_URL2 = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
// const auth_token = 'de24e74a77bb4e1c85730cbb62634e4c';

// const proxy = {
//     protocol: 'http',
//     host: '183.87.158.141',
//     port: 8080
// }

const api = axios.create({
    // baseURL: BASE_URL2,
    // headers: {
    //     'X-Auth-Token': auth_token,
    //     'Access-Control-Allow-Origin': '*',
    //     // 'Access-Control-Allow-Origin': 'http://api.football-data.org',
    //     'Access-Control-Allow-Methods': 'GET',
    //     // 'Content-Type': 'application/json;charset=UTF-8',

    //     'Access-Control-Allow-Headers': "x-auth-token, x-response-control",
    //     'Content-Length': 0,
    //     'Content-Type': 'text/plain'
    //     // 'X-Authenticated-Client': 'Sadananda Roy',
    //     // 'X-API-Version': 'v4',
    //     // 'Server': 'nginx/1.14.2'
    // } 
});

export const Get = (url) => {
    return api.get(url);
};

export const post = (url, payload) => {
  return api.post(url, payload);
};

