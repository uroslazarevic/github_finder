import { GET_PROFILES } from '../actions';

const initialState = {
  profiles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return { ...state, profiles: action.payload.items };

    default:
      return state;
  }
};
