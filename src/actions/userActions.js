import * as types from './types'

export function fetchUsers() {
    return { type: types.FETCH_USERS }
}

export function deleteUser(data) {
    return { type: types.DELETE_USER, data }
}

export function blockUser(data) {
    return { type: types.BLOCK_USER, data }
}