import React from 'react';
import { RiLuggageCartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
class CartWidget extends React.Component {
  render() {
    return (  
        <Link to='/cart' style={{color: "white"}}><RiLuggageCartLine /></Link> 
    );  
    }
}

export default CartWidget;