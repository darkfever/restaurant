import * as types from './types'

export function fetchReview(data) {
    return { type: types.FETCH_REVIEW, data }
}

export function fetchReviews() {
    return { type: types.FETCH_REVIEWS }
}

export function addReview(data) {
    return { type: types.ADD_REVIEW, data }
}

export function deleteReview(data)  {
    return { type: types.DELETE_REVIEW, data }
}