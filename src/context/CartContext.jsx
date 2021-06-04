import React, { createContext, useState } from 'react'

const CartContext = createContext([{}, () => {}])

function CartProvider(props) {

    const [cart, setCart] = useState({})

    return (
        <CartContext.Provider value={[cart, setCart]} >
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }