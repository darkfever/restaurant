import * as types from '../actions/types'
import isEmpty from '../utils/isEmpty'

const initialState = {
    isLoading: false,
    signUpResponse: '',
    error: '',
    isAuth: false
}

export default function authReducer(state = initialState, action){
    switch(action.type){
        case types.SING_UP:
            return {...state, isLoading: true}
        case types.SING_UP_SUCCESS:
            return {...state, isLoading: false, signUpResponse: action.payload}
        case types.SING_UP_FAILED:
            return {...state, isLoading: false, error: action.error}
        case types.SING_IN:
            return { ...state, isLoading: true }
        case types.SET_CURRENT_USER:
            return { ...state, isLoading: false, isAuth: !isEmpty(action.payload) }
        default:
            return state
    }
}