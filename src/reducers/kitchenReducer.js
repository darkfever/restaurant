import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    kitchen: {},
    kitchens: [],
    error: ''
}

export default function kitchenReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_KITCHENS:
            return { ...state, isLoading: true }
        case types.FETCH_KITCHENS_SUCCESS:
            return { ...state, isLoading: false, kitchens: action.payload }
        case types.FETCH_KITCHENS_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.ADD_KITCHEN:
            return { ...state, isLoading: true }
        case types.ADD_KITCHEN_SUCCESS:
            return { ...state, isLoading: false, kitchens: [...state.kitchens, action.payload] }
        case types.ADD_KITCHEN_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.EDIT_KITCHEN:
            return { ...state, isLoading: true }
        case types.EDIT_KITCHEN_SUCCESS:
            let index = state.kitchens.findIndex(item => item.id === action.payload.data.id)
            if(index !== -1){
                state.kitchens[index] = action.payload.data
            }
            return { ...state, isLoading: false, kitchens: [...state.kitchens]}
        case types.EDIT_KITCHEN_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.DELETE_KITCHEN:
            return { ...state, isLoading: true }
        case types.DELETE_KITCHEN_SUCCESS:
            state.kitchens = state.kitchens.filter(item => item.id !== action.payload.data)
            return { ...state, isLoading: false, kitchens: [...state.kitchens] }
        case types.DELETE_KITCHEN_FAILED:
            return { ...state, isLoading: false, error: action.error }
        default:
            return state
    }
}