import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    favorite: {},
    favorites: [],
    error: ''
}

export default function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_FAVORITES:
            return { ...state, isLoading: true }
        case types.FETCH_FAVORITES_SUCCESS:
            return { ...state, isLoading: false, favorites: action.payload }
        case types.FETCH_FAVORITES_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.ADD_TO_FAVORITE:
            return { ...state, isLoading: true }
        case types.ADD_TO_FAVORITE_SUCCESS:
            return { ...state, isLoading: false, favorites: [...state.favorites, action.payload] }
        case types.ADD_TO_FAVORITE_FAILED:
            return { ...state, isLoading: false, error: action.error }
        default:
            return state
    }
}