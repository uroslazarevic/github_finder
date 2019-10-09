// import axios from 'axios';
// import qs from 'qs';

// export const SEARCH_LOCATION = 'SEARCH_LOCATION';

// export function getSearchedLocation ({locationTerm = 'Bra', count='10'} = {}) {
//   const data = {
//     q: locationTerm,
//     count
//   }

//   const stringify = qs.stringify(data);

//   const config = {
//     method: 'GET',
//     url: `${ROOT_URL}cities?${stringify}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'user-key': USER_KEY
//     }
//   }

//   const request = axios(config);

//   return {
//     type: SEARCH_LOCATION,
//     payload: request
//   };
// }
