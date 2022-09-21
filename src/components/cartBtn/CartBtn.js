import React from 'react'
import { useCartContext } from '../../context/CartContext';

const CartBtn = ({ product }) => {
    const { id } = product

    const { addToCart, isInCart } = useCartContext()
    let cartBtn;
    if (!isInCart(id)) {
        cartBtn = (
            <>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </>
        )
    }
    if (isInCart(id)) {
        cartBtn = (
            <>
                <button >Added In Cart</button>
            </>
        )
    }
    return (
        <div>
            {cartBtn}
        </div>
    )
}

export default CartBtn