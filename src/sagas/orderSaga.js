import { put, all, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* fetchOrder(action) {
    try {
        const orders = yield axios.get('http://localhost:9000/api/order').then(res => res.data)
        yield put({ type: types.FETCH_ORDER_SUCCESS, payload: orders })
    } catch (error) {
        yield put({ type: types.FETCH_ORDER_FAILED, error })
    }
}

function* fetchOrders(action) {
    try {
        const orders = yield axios.get('http://localhost:9000/api/order/all').then(res => res.data)
        yield put({ type: types.FETCH_ORDERS_SUCCESS, payload: orders })
    } catch (error) {
        yield put({ type: types.FETCH_ORDERS_FAILED, error })
    }
}

function* addOrder(action) {
    try {
        const order = yield axios.post('http://localhost:9000/api/order', action.data).then(res => res.data)
        yield put({ type: types.ADD_ORDER_SUCCESS, payload: order })
    } catch (error) {
        yield put({ type: types.ADD_ORDER_FAILED, error })
    }
}

function* deleteOrder(action) {
    try {
        const order = yield axios.delete(`http://localhost:9000/api/order/${action.data}`).then(res => res.data)
        yield put({ type: types.DELETE_ORDER_SUCCESS, payload: order })
    } catch (error) {
        yield put({ type: types.DELETE_ORDER_FAILED, error })
    }
}

export function* orderSaga() {
    yield all([
        yield takeLatest(types.FETCH_ORDER, fetchOrder),
        yield takeLatest(types.ADD_ORDER, addOrder),
        yield takeLatest(types.DELETE_ORDER, deleteOrder),
        yield takeLatest(types.FETCH_ORDERS, fetchOrders),
    ])
}