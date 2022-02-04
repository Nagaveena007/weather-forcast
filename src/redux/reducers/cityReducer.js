import { GET_WEATHER_UPDATE_FOR_QUERY } from "../actions";
import { initialState } from "../store";

const cityReducer = (state = initialState.city, action) => {
  switch (action.type) {
    case GET_WEATHER_UPDATE_FOR_QUERY:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default cityReducer;
