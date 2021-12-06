import {all} from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { kitchenSaga } from './kitchenSaga'
import { restaurantSaga } from './restaurantSaga'
import { orderSaga } from './orderSaga'
import { reviewSaga } from './reviewSage'
import { userSaga } from './userSaga'
import { favoriteSaga } from './favoriteSage'

export default function* rootSaga(){
    yield all([
        authSaga(),
        kitchenSaga(),
        restaurantSaga(),
        orderSaga(),
        reviewSaga(),
        userSaga(),
        favoriteSaga(),
    ])
}