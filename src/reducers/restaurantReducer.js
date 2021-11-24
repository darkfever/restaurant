import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    restaurant: {},
    restaurants: [],
    error: '',
    total: 0
}

export default function restaurantReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_RESTAURANTS:
            return { ...state, isLoading: true }
        case types.FETCH_RESTAURANTS_SUCCESS:
            return { ...state, isLoading: false, restaurants: action.payload }
        case types.FETCH_RESTAURANTS_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.ADD_RESTAURANT:
            return { ...state, isLoading: true }
        case types.ADD_RESTAURANT_SUCCESS:
            return { ...state, isLoading: false, restaurants: [...state.restaurants, action.payload] }
        case types.ADD_RESTAURANT_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.EDIT_RESTAURANT:
            return { ...state, isLoading: true }
        case types.EDIT_RESTAURANT_SUCCESS:
            let index = state.restaurants.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.restaurants[index] = action.payload
            }
            return { ...state, isLoading: false, restaurants: [...state.restaurants] }
        case types.EDIT_RESTAURANT_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.DELETE_RESTAURANT:
            return { ...state, isLoading: true }
        case types.DELETE_RESTAURANT_SUCCESS:
            state.restaurants = state.restaurants.filter(item => item.id !== action.payload.data)
            return { ...state, isLoading: false, restaurants: [...state.restaurants] }
        case types.DELETE_RESTAURANT_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.FILTER_RESTAURANT:
            return { ...state, isLoading: true }
        case types.FILTER_RESTAURANT_SUCCESS:
            return { ...state, isLoading: false, restaurants: action.payload }
        case types.FILTER_RESTAURANT_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.SEARCH_RESTAURANT:
            return { ...state, isLoading: true }
        case types.SEARCH_RESTAURANT_SUCCESS:
            return { ...state, isLoading: false, restaurants: action.payload.restaurants, total: action.payload.total }
        case types.SEARCH_RESTAURANT_FAILED:
            return { ...state, isLoading: false, error: action.error }
        default:
            return state
    }
}