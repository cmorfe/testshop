import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'reactstrap';
import Product from './Product'

const ProductItem = ({product, onAddToCartClicked}) => (
    <div style={{marginBottom: 20}}>
        <Product
            name={product.name}
            price={product.price}
            quantity={product.quantity}/>
        <Button
            onClick={onAddToCartClicked}
            disabled={product.quantity <= 0}>
            {product.quantity > 0 ? 'Añadir al carrito' : 'Agotado'}
        </Button>
    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
