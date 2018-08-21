import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

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

export const fetchLocations = () => (dispatch, getState) => {
    console.log("fetching locations");
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
