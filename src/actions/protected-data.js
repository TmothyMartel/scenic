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

export const FETCH_SINGLE_LOCATION_SUCCESS = "FETCH_SINGLE_LOCATION_SUCCESS";
export const fetchSingleLocationSuccess = (singleLocation) => ({
    type: FETCH_SINGLE_LOCATION_SUCCESS,
    singleLocation
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
        .then(( singleLocation ) => dispatch(fetchSingleLocationSuccess(singleLocation)))
        .catch(err => {
            dispatch(fetchLocationsError(err));
        });
};

export const createLocation = location => dispatch => {
    return fetch(`${API_BASE_URL}/api/locations`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(location)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => console.log('success', data))
        .catch(err => {
            console.log('error', err)
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



