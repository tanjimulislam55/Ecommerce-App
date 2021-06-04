/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, CircularProgress, Container, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import useCart from '../../hook/useCart'
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from './styles'

export default function Cart() {
    const classes = useStyles()
    const {
        cart,
        fetchCart,
        handleRemoveCartItem,
        handleUpdateCartQty,
    } = useCart()

    useEffect(() => {
        fetchCart()
    }, [])

    if (!cart.line_items) return <div className={classes.loading}><p>Loading...</p><CircularProgress color="black" /></div>

    return (
        <Container className={classes.content}>
            { cart.line_items.length ? (
                <>
                    <List dense className={classes.toolbar}>
                        {cart.line_items.map((lineItem) => (
                            <>
                                <ListItem className={classes.list} sm key={lineItem.id}>
                                    <ListItemAvatar>
                                        <Avatar alt={lineItem.name} src={lineItem.media.source} />
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <div className={classes.info}>
                                            <div style={{textAlign: 'center'}}>
                                                <Typography>{lineItem.name}</Typography>
                                                <Typography style={{color: 'green'}}>{lineItem.line_total.formatted_with_symbol}</Typography>
                                            </div>
                                            <Typography style={{paddingTop: '10px'}}>Quantity: {lineItem.quantity}</Typography>
                                        </div>
                                    </ListItemText>
                                    <ListItemSecondaryAction>
                                        <Button onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>Less</Button>
                                        <Button onClick={() => handleUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>More</Button>
                                        <IconButton edge="end" onClick={() => handleRemoveCartItem(lineItem.id)}>
                                            <ClearIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                            </>
                        ))}
                    </List>
                    <div>
                        <Typography variant="h4">
                            Subtotal: {cart.subtotal.formatted_with_symbol}
                        </Typography>
                        <Button size="large" type="button" variant="outlined" color="primary">Checkout</Button>
                    </div>
                </>
            ) : (
                <div className={classes.loading}>
                    <Typography variant="h5" >Cart is empty</Typography>
                    <Typography variant="h4" style={{padding: '24px'}}>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                </div>
            )}
        </Container>
    )
}
