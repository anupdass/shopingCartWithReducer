import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const initialState = {
        totalAmount: 50,
        quantity: 0,
        cartItems: []
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (product) => {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
    const Increment = (id) => {
        return dispatch({
            type: 'INCREMENT',
            payload: id
        })
    }
    const Decrement = (id) => {
        return dispatch({
            type: 'DECREMENT',
            payload: id
        })
    }


    const removeItem = (id) => {
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        })
    }

    const getQuantity = (id) => {
        const product = state.cartItems.find(item => { return item.id === id })
        return product && product.quantity ? product.quantity : 0;
    }

    const isInCart = (id) => {
        return !!state.cartItems.find((item) => item.id === id)
        // return !!state.cartItems.find((item) => item.id === id)
    }


    useEffect(() => {
        return dispatch({
            type: 'GET_TOTAL'
        })
    }, [state.cartItems])

    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                totalAmount: state.totalAmount,
                addToCart,
                Increment,
                isInCart,
                getQuantity,
                Decrement,
                removeItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}