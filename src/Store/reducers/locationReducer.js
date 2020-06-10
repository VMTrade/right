const locationReducer = function (state = "", action) {
  switch (action.type) {
    case "SETLOCATION":
      return action.payload;
    default:
      return state;
  }
};
export default locationReducer;
