import React from "react";
import {Container} from 'react-bootstrap'
import CartItems from '../CartItems/CartItems'

const CartList = ({value}) => {
  const {cart} = value
  return (
    <Container fluid>
     {cart.map(item=>{
       return <CartItems key={item.id} item={item} value={value}/>
     })}
      
    </Container>
  );
};

export default CartList;
