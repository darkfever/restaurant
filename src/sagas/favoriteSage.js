import { put, all, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* addFavorite(action) {
    try {
        const favorite = yield axios.post('http://localhost:9000/api/favorite', action.data).then(res => res.data)
        yield put({ type: types.ADD_TO_FAVORITE_SUCCESS, payload: favorite })
    } catch (error) {
        yield put({ type: types.ADD_TO_FAVORITE_FAILED, error })
    }
}

function* fetchFavorites(action) {
    try {
        const favorites = yield axios.get('http://localhost:9000/api/favorite').then(res => res.data)
        yield put({ type: types.FETCH_FAVORITES_SUCCESS, payload: favorites })
    } catch (error) {
        yield put({ type: types.FETCH_FAVORITES_FAILED, error })
    }
}

export function* favoriteSaga() {
    yield all([
        yield takeLatest(types.ADD_TO_FAVORITE, addFavorite),
        yield takeLatest(types.FETCH_FAVORITES, fetchFavorites)
    ])
}