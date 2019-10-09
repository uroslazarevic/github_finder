// import {
//   SEARCH_LOCATION,
//   SEARCH_CATEGORIES,
//   SEARCH_PLACES
// } from '../actions'

// const initialState = {
//   searchedLocations: [],
//   searchedCategories: [],
//   searchedPlaces: []
// }

// export default (state = initialState, action) => {

//   switch (action.type) {
//     case SEARCH_LOCATION:
//       return { ...state, searchedLocation: action.payload.data.location_suggestions};

//     case SEARCH_CATEGORIES:
//       return { ...state, searchedCategories: action.payload.data.categories};

//     case SEARCH_PLACES:
//       return { ...state, searchedPlaces: action.payload.data}

//     default:
//       return state;
//   }
// }
