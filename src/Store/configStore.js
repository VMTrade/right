import { createStore, combineReducers } from "redux";

import configReducer from "./reducers/configReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  config: configReducer,
  cart: cartReducer,
});
const Store = createStore(rootReducer);
export default Store;
