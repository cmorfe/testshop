import React from 'react'
import PropTypes from 'prop-types'

const Product = ({price, quantity, name}) => (
    <tr>
        <td>
            {name.toUpperCase()}
        </td>
        <td>
            {quantity ? quantity : null}
        </td>
        <td>
            {price}
        </td>
    </tr>
)

Product.propTypes = {
    price: PropTypes.string,
    quantity: PropTypes.number,
    name: PropTypes.string
}

export default Product
