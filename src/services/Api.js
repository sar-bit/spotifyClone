import apisauce from 'apisauce';

const baseUrl = 'https://api.spotify.com';
//const baseUrl2 = 'https://accounts.spotify.com/api/token';
const create = (baseURL = baseUrl) => {
  const apis = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 800000,
  });

//   const apis2 = apisauce.create({
//     baseUrl2,
//     headers: {
//     'Content-Type' : 'application/x-www-form-urlencoded',
//     'Authorization' : `Basic +`
//     },
//     timeout: 800000,
//   });

  
  const signIn = data =>apis.post('/auth/signin', data);
  const getSpotifyList= data =>{ 
    return apis.get('/v1',{}, {headers: {Authorization: data.token}})}

  return {
    signIn,
    getSpotifyList
  };
};
export default {
  create,
};
