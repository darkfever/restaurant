import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    user: {},
    users: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERS:
            return { ...state, isLoading: true }
        case types.FETCH_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload }
        case types.FETCH_USERS_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.DELETE_USER:
            return { ...state, isLoading: true }
        case types.DELETE_USER_SUCCESS:
            state.users = state.users.filter(item => item.id !== action.payload.id)
            return { ...state, isLoading: false, users: [...state.users] }
        case types.DELETE_USER_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.BLOCK_USER:
            return { ...state, isLoading: true }
        case types.BLOCK_USER_SUCCESS:
            let index = state.users.findIndex(item => item.id === action.payload.id)
            if (action.payload.users.updated[0] === 1 && index !== -1) {
                state.users[index].blocked = action.payload.action
            }
            return { ...state, isLoading: false, users: [...state.users] }
        case types.BLOCK_USER_FAILED:
            return { ...state, isLoading: false, error: action.error }
        default:
            return state
    }
}