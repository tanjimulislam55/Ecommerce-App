import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { commerce } from '../lib/commerce'

export default function useCart() {
    const [cart, setCart] = useContext(CartContext)

    async function fetchCart () {
        setCart(await commerce.cart.retrieve())
    }

    async function handleAddToCart (productId, qty) {
        const item = await commerce.cart.add(productId, qty)
        setCart(item.cart)
    }

    async function handleRemoveCartItem (lineItemId) {
        const response = await commerce.cart.remove(lineItemId)
        setCart(response.cart)
    }
    
    async function handleUpdateCartQty (productId, qty) {
        const response = await commerce.cart.update(productId, { quantity: qty })
        setCart(response.cart)
    }

    return {
        totalItems: cart.total_items,
        cart,
        handleAddToCart,
        fetchCart,
        handleRemoveCartItem,
        handleUpdateCartQty,
    }
}
