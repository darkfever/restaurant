import * as types from './types'

export function fetchRestaurants() {
    return { type: types.FETCH_RESTAURANTS }
}

export function addRestaurant(data) {
    return { type: types.ADD_RESTAURANT, data }
}

export function editRestaurant(data) {
    return { type: types.EDIT_RESTAURANT, data }
}

export function deleteRestaurant(data) {
    return { type: types.DELETE_RESTAURANT, data }
}

export function filterRestaurants(data) {
    return { type: types.FILTER_RESTAURANT, data}
}

export function searchRestaurants(data) {
    return { type: types.SEARCH_RESTAURANT, data }
}