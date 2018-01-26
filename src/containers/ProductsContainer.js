import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addToCart} from '../actions'
import {getVisibleProducts} from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import {Table} from "reactstrap";

const ProductsContainer = ({products, addToCart}) => (
    <ProductsList name="Productos">
        <Table size='sm' striped hover responsive>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Añadir</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCartClicked={() => addToCart(product.id)}/>
            )}
            </tbody>
        </Table>
    </ProductsList>
)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    {addToCart}
)(ProductsContainer)
