import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './ProductItem.css'

const ProductItem = ({ product }) => {

    const { Increment,
        isInCart,
        addToCart,
        cartItems,
        getQuantity,
        Decrement,
        removeItem
    } = useCartContext()
    const { id, title, description, price, img, } = product


    let cartBtn;
    let removeItemCart;
    if (!isInCart(id)) {
        cartBtn = <button onClick={() => addToCart(product)}>add to cart</button>
    }
    if (isInCart(id)) {
        cartBtn = <button disabled style={{ color: 'white', fontSize: '16px' }}>{getQuantity(id)}</button>
        removeItemCart =
            <>
                <button onClick={() => Increment(id)}>Increment</button>
                <button onClick={() => Decrement(id)}>Decrement</button>
                <button onClick={() => removeItem(id)}>Remove</button>
            </>
    }


    return (
        <div className='productItem'>
            <div className='imgWrapper'><img src={img} /></div>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <p>{description}</p>
            {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
            {cartBtn}
            {removeItemCart}
        </div>
    )
}

export default ProductItem