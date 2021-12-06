import * as types from './types'

export function fetchOrder() {
    return { type: types.FETCH_ORDER }
}

export function fetchOrders() {
    return { type: types.FETCH_ORDERS }
}

export function addOrder(data) {
    return { type: types.ADD_ORDER, data }
}

export function deleteOrder(data) {
    return { type: types.DELETE_ORDER, data }
}
