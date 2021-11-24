import { all, put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/types'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken';

function* signUp(action){
    const { data } = action;
    try {
        const authResponse = yield axios.post('http://localhost:9000/api/users/register', data).then(res => res.data)
        yield put({type: types.SING_UP_SUCCESS, payload: authResponse})
    } catch(error) {
        yield put({ type: types.SING_UP_FAILED, error })
    }
}

function* signIn(action){
    const { data, history } = action
    try{
        const authResponse = yield axios.post('http://localhost:9000/api/users/login', data).then(res => res.data)
        const { token } = authResponse
        setAuthToken(token)
        localStorage.setItem('token', token)
        const decoded = jwt_decode(token)
        yield put({type: types.SET_CURRENT_USER, payload: decoded})
        history.push('/dashboard')
    } catch(error) {
        yield put({ type: types.SING_IN_FAILED, error})
    }
}

function* signOut(action) {
    const { history } = action;
    localStorage.clear();
    document.cookie = ``;
    try {
        // yield axios.post(`http://localhost:9000/api/users/logout`).then(res => res.data);
        setAuthToken(false);
        yield put({ type: types.SET_CURRENT_USER, payload: {} });
        history.push(`/`);
    } catch (error) {
        console.error(`Ошибка`);
    }

}

export function* authSaga(){
    yield all([
        yield takeLatest(types.SING_UP, signUp),
        yield takeLatest(types.SING_IN, signIn),
        yield takeLatest(types.SIGN_OUT, signOut)
    ])
}