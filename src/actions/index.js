import _products from '../data/products.json'

export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * Simula el procesamiento cliente/servidor
 */
const TIMEOUT = 100

const shop = {
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

const getProducts = products => ({
    type: GET_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(getProducts(products))
    })
}

const addToCartUnsafe = productId => ({
    type: ADD_TO_CART,
    productId
})

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].quantity > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

export const checkout = products => (dispatch, getState) => {
    const {cart} = getState()

    dispatch({
        type: CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: CHECKOUT_SUCCESS,
            cart
        })
    })
}
