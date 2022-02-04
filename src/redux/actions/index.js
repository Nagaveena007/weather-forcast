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
