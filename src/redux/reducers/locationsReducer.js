import { ADD_LOCATION } from "../actions";
import { initialState } from "../store";

const LocationsReducer = (
  state = initialState.locations,
  action
) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    default:
      return state;
  }
};

export default LocationsReducer;
