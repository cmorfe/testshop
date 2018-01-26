import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import {Button, Table} from "reactstrap";

const Cart = ({products, total, onCheckoutClicked}) => {
    const hasProducts = products.length > 0

    return (
        <div>
            <h3>Tu Carrito</h3>
            <div>
                {hasProducts ?
                    (
                        <Table responsive hover striped>
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map(product => (
                                <Product
                                    name={product.name}
                                    price={product.price}
                                    quantity={product.quantity}
                                    key={product.id}
                                />
                            ))}
                            </tbody>
                            <p>Total a cancelar: &#36;{total}</p>
                            <Button onClick={onCheckoutClicked}
                                    disabled={!hasProducts}>
                                Realizar compra
                            </Button>
                        </Table>
                    ) : (
                        <em>Le invitamos a añadir los productos que desee comprar:</em>
                    )
                }
            </div>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.number,
    onCheckoutClicked: PropTypes.func
}

export default Cart
