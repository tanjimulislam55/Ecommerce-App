/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import useCart from '../../hook/useCart'
import Products from './Products/Products'

export default function ProductsContainer() {
    const [products, setProducts] = useState([])
    const {
        handleAddToCart,
    } = useCart()

    async function fetchProducts () {
        const response = await commerce.products.list()
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
    return (
        <Products products={products} handleAddToCart={handleAddToCart} />
    )
}
