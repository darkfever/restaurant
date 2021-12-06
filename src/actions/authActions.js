import * as types from './types'

export function signUp(data, history) {
    return { type: types.SING_UP, data, history }
}

export function signIn(data, history) {
    return { type: types.SING_IN, data, history }
}

export function signOut(history) {
    return {type: types.SIGN_OUT, history}
}
