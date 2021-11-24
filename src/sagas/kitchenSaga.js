import { put, all, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import * as types from '../actions/types'

function* fetchKitchens(action){
    try{
        const kitchen = yield axios.get('http://localhost:9000/api/kitchen').then(res => res.data)
        yield put({type: types.FETCH_KITCHENS_SUCCESS, payload: kitchen })
    } catch (error) {
        yield put({type: types.FETCH_KITCHENS_FAILED, error})
    }
}

function* addKitchen(action) {
    try {
        const kitchen = yield axios.post('http://localhost:9000/api/kitchen', action.data).then(res => res.data)
        yield put({ type: types.ADD_KITCHEN_SUCCESS, payload: kitchen })
    } catch (error) {
        yield put({ type: types.ADD_KITCHEN_FAILED, error })
    }
}

function* editKitchen(action) {
    try {
        const kitchen = yield axios.put(`http://localhost:9000/api/kitchen/${action.data.id}`, action.data).then(res => res.data)
        yield put({ type: types.EDIT_KITCHEN_SUCCESS, payload: { kitchen: kitchen, data: action.data} })
    } catch (error) {
        yield put({ type: types.EDIT_KITCHEN_FAILED, error })
    }
}

function* deleteKitchen(action) {
    try {
        const kitchen = yield axios.delete(`http://localhost:9000/api/kitchen/${action.data}`).then(res => res.data)
        yield put({ type: types.DELETE_KITCHEN_SUCCESS, payload: { kitchen: kitchen, data: action.data } })
    } catch (error) {
        yield put({ type: types.DELETE_KITCHEN_FAILED, error })
    }
}

export function* kitchenSaga() {
    yield all([
        yield takeLatest(types.FETCH_KITCHENS, fetchKitchens),
        yield takeLatest(types.ADD_KITCHEN, addKitchen),
        yield takeLatest(types.EDIT_KITCHEN, editKitchen),
        yield takeLatest(types.DELETE_KITCHEN, deleteKitchen)
    ])
}