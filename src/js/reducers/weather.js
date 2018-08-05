import { FETCH_WEATHER, CLEAN_WEATHER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CLEAN_WEATHER:
      return action.payload;
    case FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
