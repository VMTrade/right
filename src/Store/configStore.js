import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import configReducer from "./reducers/configReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
const rootReducer = combineReducers({
  config: configReducer,
  cart: cartReducer,
  product: productReducer,
});
const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;
