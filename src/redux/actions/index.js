import { SAVE_MAP_COORDS, RETURN_MAP_COORDS } from "../constants/action-types";

export const GET_WEATHER_UPDATE_FOR_QUERY = "GET_WEATHER_UPDATE_FOR_QUERY";

export const ADD_LOCATION = "ADD_LOCATION";

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2fd2e580638777be48246a423f97367b`
      );
      if (response.ok) {
        const weather = await response.json();
        dispatch({
          type: ADD_LOCATION,
          payload: weather,
        });
        dispatch({
          type: GET_WEATHER_UPDATE_FOR_QUERY,
          payload: weather,
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export function saveMapCoords(x, y) {
  return {
    type: SAVE_MAP_COORDS,
    payload: {
      x: x,
      y: y,
    },
  };
}

export function getMapCoords() {
  return {
    type: RETURN_MAP_COORDS,
  };
}
