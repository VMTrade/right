import { createStore } from "redux";
import locationReducer from "./reducers/locationReducer";
const Store = createStore(locationReducer);
export default Store;
