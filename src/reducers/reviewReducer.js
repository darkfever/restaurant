import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    review: {},
    reviews: [],
    error: ''
}

export default function reviewReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REVIEW:
            return { ...state, isLoading: true }
        case types.FETCH_REVIEW_SUCCESS:
            return { ...state, isLoading: false, reviews: action.payload }
        case types.FETCH_REVIEW_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.FETCH_REVIEWS:
            return { ...state, isLoading: true }
        case types.FETCH_REVIEWS_SUCCESS:
            return { ...state, isLoading: false, reviews: action.payload }
        case types.FETCH_REVIEWS_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.ADD_REVIEW:
            return { ...state, isLoading: true }
        case types.ADD_REVIEW_SUCCESS:
            return { ...state, isLoading: false, reviews: [...state.reviews, action.payload[0]] }
        case types.ADD_REVIEW_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.DELETE_REVIEW:
            return { ...state, isLoading: true }
        case types.DELETE_REVIEW_SUCCESS:
            state.reviews = state.reviews.filter(item => item.id !== action.payload.id)
            return { ...state, isLoading: false, reviews: [...state.reviews] }
        case types.DELETE_REVIEW_FAILED:
            return { ...state, isLoading: false, error: action.error }
        default:
            return state
    }
}