import { put, all, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* fetchReview(action) {
    try {
        const reviews = yield axios.get(`http://localhost:9000/api/review/${action.data}`).then(res => res.data)
        yield put({ type: types.FETCH_REVIEW_SUCCESS, payload: reviews })
    } catch (error) {
        yield put({ type: types.FETCH_REVIEW_FAILED, error })
    }
}

function* fetchReviews(action) {
    try {
        const reviews = yield axios.get(`http://localhost:9000/api/review`).then(res => res.data)
        yield put({ type: types.FETCH_REVIEWS_SUCCESS, payload: reviews })
    } catch (error) {
        yield put({ type: types.FETCH_REVIEWS_FAILED, error })
    }
}

function* addReview(action) {
    try {
        const review = yield axios.post('http://localhost:9000/api/review', action.data).then(res => res.data)
        yield put({ type: types.ADD_REVIEW_SUCCESS, payload: review })
    } catch (error) {
        yield put({ type: types.ADD_REVIEW_SUCCESS, error })
    }
}

function* deleteReview(action) {
    try {
        const review = yield axios.delete(`http://localhost:9000/api/review/${action.data}`).then(res => res.data)
        yield put({ type: types.DELETE_REVIEW_SUCCESS, payload: { id: action.data, review: review } })
    } catch (error) {
        yield put({ type: types.DELETE_REVIEW_FAILED, error })
    }
}

export function* reviewSaga() {
    yield all([
        yield takeLatest(types.FETCH_REVIEW, fetchReview),
        yield takeLatest(types.ADD_REVIEW, addReview),
        yield takeLatest(types.FETCH_REVIEWS, fetchReviews),
        yield takeLatest(types.DELETE_REVIEW, deleteReview),
    ])
}