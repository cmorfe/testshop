import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'reactstrap';

const ProductItem = ({product, onAddToCartClicked}) => (
    <tr style={{marginBottom: 20}}>
        <td>
            {product.name.toUpperCase()}
        </td>
        <td>
            {product.quantity ? product.quantity : null}
        </td>
        <td>
            {product.price}
        </td>
        <td>
            <Button
                onClick={onAddToCartClicked}
                disabled={product.quantity <= 0}>
                {product.quantity > 0 ? '+' : 'Agotado'}
            </Button>
        </td>
    </tr>
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
