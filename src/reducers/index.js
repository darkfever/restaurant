import { combineReducers } from "redux";
import authReducer from "./authReducer";
import kitchenReducer from './kitchenReducer'
import restaurantReducer from "./restaurantReducer"
import orderReducer from "./orderReducer"
import reviewReducer from "./reviewReducer"
import userReducer from "./userReducer"
import favoriteReducer from "./favoriteReducer"

export default combineReducers({
    authReducer,
    kitchenReducer,
    restaurantReducer,
    orderReducer,
    reviewReducer,
    userReducer,
    favoriteReducer,
})