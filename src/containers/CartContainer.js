import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {checkout} from '../actions'
import {getCartProducts, getTotal} from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({products, total, checkout}) => (
    <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}/>
)

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.number,
    checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    {checkout}
)(CartContainer)
