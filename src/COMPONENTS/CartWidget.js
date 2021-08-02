import React from "react"
import { IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = () => {
    return (
<IconButton edge="start" color="inherit" aria-label="menu">
<ShoppingCartIcon />
</IconButton> )

};

export default CartWidget