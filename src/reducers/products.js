import {combineReducers} from 'redux'
import {ADD_TO_CART, GET_PRODUCTS} from '../constants/ActionTypes'

const products = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                quantity: state.quantity - 1
            }
        default:
            return state
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            const {productId} = action
            if (productId) {
                return {
                    ...state,
                    [productId]: products(state[productId], action)
                }
            }
            return state
    }
}

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

export const getProduct = (state, id) =>
    state.byId[id]

export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id))