import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function ProductItem({ product, handleAddToCart }) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" style={{color: 'green'}}>
                        ${product.price.formatted}
                    </Typography>
                    {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} /> */}
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button className={classes.actionButton} variant="outlined" color="black" onClick={() => handleAddToCart(product.id, 1)}>Add to Cart</Button>
                <Button variant="outlined">Details</Button>
            </CardActions>
        </Card>
    )
}
