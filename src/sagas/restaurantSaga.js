import { put, all, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* fetchRestaurants(action) {
    try {
        const restaurant = yield axios.get('http://localhost:9000/api/restaurant/get').then(res => res.data)
        yield put({ type: types.FETCH_RESTAURANTS_SUCCESS, payload: restaurant })
    } catch (error) {
        yield put({ type: types.FETCH_RESTAURANTS_FAILED, error })
    }
}

function* addRestaurant(action) {
    try {
        const fm = new FormData()
        fm.append('name', action.data.name)
        fm.append('ResKitLists', JSON.stringify(action.data.ResKitLists))
        fm.append('amountOfPlace', action.data.amountOfPlace)
        fm.append('averageBill', action.data.averageBill)
        fm.append('image', action.data.image)
        fm.append('location', action.data.location)
        fm.append('phone', action.data.phone)
        fm.append('rate', action.data.rate)
        const restaurant = yield axios.post('http://localhost:9000/api/restaurant', fm).then(res => res.data)
        yield put({ type: types.ADD_RESTAURANT_SUCCESS, payload: restaurant })
    } catch (error) {
        yield put({ type: types.ADD_RESTAURANT_FAILED, error })
    }
}

function* editRestaurant(action) {
    try {
        const fm = new FormData()
        fm.append('name', action.data.name)
        fm.append('ResKitLists', JSON.stringify(action.data.ResKitLists))
        fm.append('amountOfPlace', action.data.amountOfPlace)
        fm.append('averageBill', action.data.averageBill)
        fm.append('image', action.data.image)
        fm.append('location', action.data.location)
        fm.append('phone', action.data.phone)
        fm.append('rate', action.data.rate)
        const restaurant = yield axios.put(`http://localhost:9000/api/restaurant/${action.data.id}`, fm).then(res => res.data)
        yield put({ type: types.EDIT_RESTAURANT_SUCCESS, payload: restaurant })
    } catch (error) {
        yield put({ type: types.EDIT_RESTAURANT_FAILED, error })
    }
}

function* deleteRestaurant(action) {
    try {
        const restaurant = yield axios.delete(`http://localhost:9000/api/restaurant/${action.data}`).then(res => res.data)
        yield put({ type: types.DELETE_RESTAURANT_SUCCESS, payload: { restaurant: restaurant, data: action.data } })
    } catch (error) {
        yield put({ type: types.DELETE_RESTAURANT_FAILED, error })
    }
}

function* filterRestaurants(action) {
    try {
        const restaurants = yield axios.post(`http://localhost:9000/api/restaurant/filter/`, { kitchens: action.data }).then(res => res.data)
        yield put({ type: types.FILTER_RESTAURANT_SUCCESS, payload: restaurants })
    } catch (error) {
        yield put({ type: types.FILTER_RESTAURANT_FAILED, error })
    }
}

function* searchRestaurants(action) {
    try {
        const restaurants = yield axios.get(`http://localhost:9000/api/restaurant?query=${action.data.query}&page=${action.data.page}`).then(res => res.data)
        yield put({ type: types.SEARCH_RESTAURANT_SUCCESS, payload: restaurants })
    } catch (error) {
        yield put({ type: types.SEARCH_RESTAURANT_FAILED, error })
    }
}

export function* restaurantSaga() {
    yield all([
        yield takeLatest(types.FETCH_RESTAURANTS, fetchRestaurants),
        yield takeLatest(types.ADD_RESTAURANT, addRestaurant),
        yield takeLatest(types.DELETE_RESTAURANT, deleteRestaurant),
        yield takeLatest(types.EDIT_RESTAURANT, editRestaurant),
        yield takeLatest(types.FILTER_RESTAURANT, filterRestaurants),
        yield takeLatest(types.SEARCH_RESTAURANT, searchRestaurants)
    ])
}