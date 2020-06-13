const locationReducer = function (
  state = { curLocation: "", notification: "" },
  action
) {
  switch (action.type) {
    case "SETLOCATION":
      return { ...state, curLocation: action.payload };
    case "SETNOTIFICATION":
      return { ...state, notification: action.payload };
    default:
      return state;
  }
};
export default locationReducer;
