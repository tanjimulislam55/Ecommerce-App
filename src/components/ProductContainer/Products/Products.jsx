import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import ProductItem from './ProductItem/ProductItem'
import useStyles from './styles'

export default function Products({ products, handleAddToCart }) {
    const classes = useStyles()

    if (!products.length) return <div className={classes.loading}><p>Loading...</p><CircularProgress color="black" /></div>

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid className={classes.grid} container justify="space-around" spacing={4}>
                {products.map((product) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={4} xl={3}>
                        <ProductItem product={product} handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
