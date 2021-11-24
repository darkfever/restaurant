import { combineReducers } from "redux";
import authReducer from "./authReducer";
import kitchenReducer from './kitchenReducer'
import restaurantReducer from "./restaurantReducer";

export default combineReducers({
    authReducer,
    kitchenReducer,
    restaurantReducer
})