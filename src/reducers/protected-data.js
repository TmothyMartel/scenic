import {
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_ERROR,
  CREATE_LOCATION_SUCCESS,
  FETCH_CREATED_LOCATIONS_SUCCESS,
  FETCH_SINGLE_LOCATION_SUCCESS,
  FETCH_FAVORITE_LOCATIONS_SUCCESS,
  FAVORITE_LOCATION
} from "../actions/protected-data";

const initialState = {
  data: "",
  error: null,
  locations: [],
  singleLocation: {},
  favoriteLocations: [],
  createdLocations: []
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_LOCATIONS_SUCCESS) {
    return Object.assign({}, state, {
      locations: action.locations,
      error: null
    });
  } else if (action.type === FETCH_LOCATIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === CREATE_LOCATION_SUCCESS) {
    return Object.assign({}, state, {
      locations: action.location,
      error: null
    });
  } else if (action.type === FETCH_CREATED_LOCATIONS_SUCCESS) {
    return Object.assign({}, state, {
      createdLocations: action.createdLocations,
      error: null
    });
  } else if (action.type === FETCH_SINGLE_LOCATION_SUCCESS) {
    return Object.assign({}, state, {
      singleLocation: action.singleLocation,
      error: null
    });
  } else if (action.type === FAVORITE_LOCATION) {
    return Object.assign({}, state, {
      singleLocation: Object.assign({}, state.singleLocation, {
        favorite: true
      })
    });
  } else if (action.type === FETCH_FAVORITE_LOCATIONS_SUCCESS) {
    return Object.assign({}, state, {
      favoriteLocations: action.favoriteLocations,
      error: null
    });
  }
  return state;
}


