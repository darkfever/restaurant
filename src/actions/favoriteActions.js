import * as types from './types'

export function fetchFavorites() {
    return { type: types.FETCH_FAVORITES }
}

export function addFavorite(data) {
    return { type: types.ADD_TO_FAVORITE, data }
}
