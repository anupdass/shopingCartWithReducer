import React from 'react'
import ProductItem from '../../components/productItem/ProductItem'
import { products } from '../../data/data'
import { useCartContext } from '../../context/CartContext'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import './Home.css'

const HomePage = () => {
    const { cartItems, totalAmount } = useCartContext();

    return (
        <div>
            <div className='cart'>
                <p>Choice Your Product & add to your cart</p>
                <p>Total Cart Item: {cartItems.length}</p>
                <p>Total amount: {totalAmount}</p>
            </div>
            <div className='home'>
                {
                    products.map(pdItem =>
                        <ProductItem
                            key={pdItem.id}
                            product={pdItem}
                        />
                    )
                }
            </div>
            <MessengerCustomerChat
                pageId="908812325903071"
                appId="5466522516802685"
            />
        </div>
    )
}

export default HomePage