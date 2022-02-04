import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cityReducer from "../reducers/cityReducer";
import locationsReducer from "../reducers/locationsReducer";
import thunk from "redux-thunk";
const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  city: {
    data: [],
  },
  locations: {
    data: [],
  },
};

const bigReducer = combineReducers({
  city: cityReducer,
  locations: locationsReducer,
});

let configureStore = createStore(
  bigReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);
export default configureStore;
