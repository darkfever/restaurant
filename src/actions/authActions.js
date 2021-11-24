import * as types from './types'

export function signUp(data) {
    return {type: types.SING_UP, data}
}

export function signIn(data, history) {
    return { type: types.SING_IN, data, history }
}

export function signOut(history) {
    return {type: types.SIGN_OUT, history}
}
