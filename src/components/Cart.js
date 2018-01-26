import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import {Button} from "reactstrap";

const Cart = ({products, total, onCheckoutClicked}) => {
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <Product
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        )
    ) : (
        <em>Le invitamos a añadir al carrito de compras los productos que desee</em>
    )

    return (
        <div>
            <h3>Tu Carrito</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <Button onClick={onCheckoutClicked}
                    disabled={!hasProducts}>
                Realizar compra
            </Button>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.number,
    onCheckoutClicked: PropTypes.func
}

export default Cart
