import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import { SubmissionError } from "redux-form";

export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const fetchLocationsSuccess = locations => ({
  type: FETCH_LOCATIONS_SUCCESS,
  locations
});

export const FETCH_LOCATIONS_ERROR = "FETCH_LOCATIONS_ERROR";
export const fetchLocationsError = error => ({
  type: FETCH_LOCATIONS_ERROR,
  error
});

export const CREATE_LOCATION_SUCCESS = "CREATE_LOCATION_SUCCCESS";
export const createLocationSuccess = location => ({
  type: CREATE_LOCATION_SUCCESS,
  location
});

export const FETCH_CREATED_LOCATIONS_SUCCESS =
  "FETCH_CREATED_LOCATIONS_SUCCESS";
export const fetchCreatedLocationsSuccess = createdLocations => ({
  type: FETCH_CREATED_LOCATIONS_SUCCESS,
  createdLocations
});

export const FETCH_SINGLE_LOCATION_SUCCESS = "FETCH_SINGLE_LOCATION_SUCCESS";
export const fetchSingleLocationSuccess = singleLocation => ({
  type: FETCH_SINGLE_LOCATION_SUCCESS,
  singleLocation
});

export const FAVORITE_LOCATION = "FAVORITE_LOCATION";
export const favoriteLocation = favorited => ({
  type: FAVORITE_LOCATION,
  favorited
});

export const FETCH_FAVORITE_LOCATIONS_SUCCESS =
  "FETCH_FAVORITE_LOCATIONS_SUCCESS";
export const fetchFavoriteLocationsSuccess = favoriteLocations => ({
  type: FETCH_FAVORITE_LOCATIONS_SUCCESS,
  favoriteLocations
});

export const fetchLocations = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/locations`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ locations }) => dispatch(fetchLocationsSuccess(locations)))
    .catch(err => {
      dispatch(fetchLocationsError(err));
    });
};

export const fetchFavoriteLocations = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/locations/favorites`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ locations }) => dispatch(fetchFavoriteLocationsSuccess(locations)))
    .catch(err => {
      dispatch(fetchLocationsError(err));
      console.log(err);
    });
};

export const fetchCreatedLocations = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/api/locations/createdByUser`, {
      method: "GET",
      headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      //.then(({ locations }) => console.log(locations))
      .then(({ locations }) =>
        dispatch(fetchCreatedLocationsSuccess(locations))
      )
      .catch(err => {
        dispatch(fetchLocationsError(err));
        console.log(err);
      })
  );
};

export const fetchSingleLocation = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/locations/${id}`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(singleLocation =>
      dispatch(fetchSingleLocationSuccess(singleLocation))
    )
    .catch(err => {
      dispatch(fetchLocationsError(err));
    });
};

export const createLocation = location => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/locations`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(location)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => console.log("success", data))
    .catch(err => {
      console.log("error", err);
      const { reason, message, location } = err;
      if (reason === "ValidationError") {
        // Convert ValidationErrors into SubmissionErrors for Redux Form

        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const favoritedLocation = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/api/locations/favorites/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
      //body: JSON.stringify()
    })
      .then(res => normalizeResponseErrors(res))
      //.then(res => res.json())
      .then(data => console.log("success", data))
      .then(favorited => dispatch(favoriteLocation(favorited)))

      .catch(err => {
        console.log("error", err);
        const { reason, message, location } = err;
        if (reason === "ValidationError") {
          // Convert ValidationErrors into SubmissionErrors for Redux Form

          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      })
  );
};
