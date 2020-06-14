import * as actionTypes from "../actions/actionTypes";

const configReducer = function (
  state = { curLocation: "", notification: "" },
  action
) {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return { ...state, curLocation: action.payload };
    case actionTypes.SET_NOTIFICATION:
      return { ...state, notification: action.payload };
    default:
      return state;
  }
};
export default configReducer;
