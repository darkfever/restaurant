import * as types from './types'

export function fetchKitchens() {
    return { type: types.FETCH_KITCHENS }
}

export function addKitchen(data){
    return { type: types.ADD_KITCHEN, data}
}

export function editKitchen(data) {
    return { type: types.EDIT_KITCHEN, data }
}

export function deleteKitchen(data) {
    return { type: types.DELETE_KITCHEN, data }
}