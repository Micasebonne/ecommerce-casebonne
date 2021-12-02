import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { RiLuggageCartLine } from 'react-icons/ri';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const context = useContext(CartContext);

    return (  
        <Link to='/cart' style={{color: "white"}}> 
        <Badge anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} badgeContent={context.cantidadItems()} color="secondary" overlap="circular" 
        > <RiLuggageCartLine/> </Badge>
        
        </Link>
      
        );  
    }

export default CartWidget;