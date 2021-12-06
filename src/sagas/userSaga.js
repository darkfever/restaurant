import { put, all, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* fetchUsers(action) {
    try {
        const users = yield axios.get('http://localhost:9000/api/users').then(res => res.data)
        yield put({ type: types.FETCH_USERS_SUCCESS, payload: users })
    } catch (error) {
        yield put({ type: types.FETCH_USERS_FAILED, error })
    }
}

function* deleteUser(action) {
    try {
        const users = yield axios.delete(`http://localhost:9000/api/users/${action.data}`).then(res => res.data)
        yield put({ type: types.DELETE_USER_SUCCESS, payload: { id: action.data, users: users } })
    } catch (error) {
        yield put({ type: types.DELETE_USER_FAILED, error })
    }
}

function* blockUser(action) {
    try {
        const users = yield axios.put(`http://localhost:9000/api/users/${action.data.id}`, action.data).then(res => res.data)
        yield put({ type: types.BLOCK_USER_SUCCESS, payload: { id: action.data.id, users: users, action: action.data.action } })
    } catch (error) {
        yield put({ type: types.BLOCK_USER_FAILED, error })
    }
}

export function* userSaga() {
    yield all([
        yield takeLatest(types.FETCH_USERS, fetchUsers),
        yield takeLatest(types.DELETE_USER, deleteUser),
        yield takeLatest(types.BLOCK_USER, blockUser),
    ])
}