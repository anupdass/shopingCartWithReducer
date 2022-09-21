export const cartReducer = (state, action) => {


    switch (action.type) {

        case 'ADD_TO_CART': {
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        }
        case 'INCREMENT': {
            const id = action.payload
            // let qntShouldRemove = 1;
            const updateCart = state.cartItems.map((curElem) => {
                // if (curElem.quantity === curElem.quantity) {
                //     qntShouldRemove = curElem.quantity;
                // }
                if (curElem.id === id) {
                    // const updateQnty = curElem.quantity + qntShouldRemove
                    const updateQnty = curElem.quantity + 1
                    return { ...curElem, quantity: updateQnty };
                }
                return curElem;
            })
            return { ...state, cartItems: updateCart }

        }
        case 'DECREMENT': {
            const id = action.payload
            // let qntShouldRemove = 1;
            const updateCart = state.cartItems.map((curElem) => {
                // if (curElem.quantity === curElem.quantity) {
                //     qntShouldRemove = curElem.quantity;
                // }
                if (curElem.id === id) {
                    // const updateQnty = curElem.quantity - qntShouldRemove
                    const updateQnty = curElem.quantity - 1
                    return { ...curElem, quantity: updateQnty };
                }
                return curElem;
            }).filter((curElem) => curElem.quantity !== 0)
            return { ...state, cartItems: updateCart }

        }

        case 'REMOVE_ITEM': {
            const id = action.payload
            const updateCart = state.cartItems.filter((item) => item.id !== id)
            return { ...state, cartItems: updateCart }
        }


        case 'GET_TOTAL': {
            let { totalAmount } = state.cartItems.reduce(
                (accum, curVal) => {
                    let { price: price, quantity } = curVal
                    let updateTotal = price * quantity;
                    accum.totalAmount += updateTotal
                    return accum;
                },
                { totalAmount: 0 }
            );
            return { ...state, totalAmount: totalAmount }
        }


        default:
            return state;
    }

}