import * as actionTypes from "./actionTypes";

export const setLocation = (payload) => {
  return {
    type: actionTypes.SET_LOCATION,
    payload: payload,
  };
};

export const setNotification = (payload) => {
  return {
    type: actionTypes.SET_NOTIFICATION,
    payload: payload,
  };
};
