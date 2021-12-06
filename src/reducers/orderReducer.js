import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    order: {},
    orders: []
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ORDER:
            return { ...state, isLoading: true }
        case types.FETCH_ORDER_SUCCESS:
            return { ...state, isLoading: false, orders: action.payload }
        case types.FETCH_ORDER_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.FETCH_ORDERS:
            return { ...state, isLoading: true }
        case types.FETCH_ORDERS_SUCCESS:
            return { ...state, isLoading: false, orders: action.payload }
        case types.FETCH_ORDERS_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.ADD_ORDER:
            return { ...state, isLoading: true }
        case types.ADD_ORDER_SUCCESS:
            let data = {
                    Restaurant: { name: action.payload.restaurant.name},
                    guest: action.payload.order.guest,
                    id: action.payload.order.id,
                    orderdate: action.payload.order.orderdate,
                    restaurantId: action.payload.order.restaurantId,
                    userId: action.payload.order.userId
            }
            return { ...state, isLoading: false, orders: [...state.orders, data] }
        case types.ADD_ORDER_FAILED:
            return { ...state, isLoading: false, error: action.error }
        case types.DELETE_ORDER:
            return { ...state, isLoading: true }
        case types.DELETE_ORDER_SUCCESS:
            state.orders = state.orders.filter(item => item.id !== Number(action.payload.data))
            return { ...state, isLoading: false, orders: [...state.orders] }
        case types.DELETE_ORDER_FAILED:
            return { ...state, isLoading: false, error: action.error }
        default:
            return state
    }
}