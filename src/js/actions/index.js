import axios from 'axios';
import { FETCH_WEATHER, CLEAN_WEATHER } from './types';
import { API_KEY } from '../components/api-key';

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=`;
// we import de API_KEY from a hide file in the repo

export function fetchWeather(city) {
  const request = axios.get(`${URL}${city}&appid=${API_KEY}`);

  return function(dispatch) {
    return request
      .then(response =>
        Promise.all([
          dispatch({
            type: CLEAN_WEATHER,
            payload: {},
          }),
          dispatch({
            type: FETCH_WEATHER,
            payload: response.data,
          }),
        ])
      )
      .catch(error => console.log(error));
  };
}
