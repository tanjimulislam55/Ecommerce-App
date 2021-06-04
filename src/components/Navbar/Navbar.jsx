/* eslint-disable no-unused-vars */
import { AppBar, Badge, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import logo from '../../assets/p_p-white-donkey.png'
import { ShoppingCart } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import useCart from '../../hook/useCart';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const classes = useStyles();
    const {
        totalItems,
    } = useCart()

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Grid container alignment="center">
                        <Grid item md lg xl>
                            <IconButton edge="start" color="white" fontSize="inherit" className={classes.iconMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography component={Link} to="/">
                                <img className={classes.img} src={logo} alt="Pete & Pedro" height="50px" />                        
                            </Typography>                         
                        </Grid>
                        <Grid item xs>
                            <IconButton component={Link} to="/cart" edge="end" color="white" fontSize="inherit" className={classes.iconCart}>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>  
        </>
    )
}
