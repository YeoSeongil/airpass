import React from 'react';
import {useSelector} from "react-redux";
import CartItem from './CartItem';
import { Items } from './ItemDis';
import { RootState } from './Reducer/_rootReducer';
import "./Cart.css"


const Cart = () => {
    const cart = useSelector((state:RootState)=>state.cartReducer);

    const cartItem = cart.length >= 1 ? cart.map((item:Items) => {
        return <CartItem item={item} key={item.id}></CartItem>
    }) : <div className="cart-empty">장바구니가 비어 있습니다.</div>

    return (
        <section className="cart-list">
            <span className="cart-list-title">Cart</span>
            {cartItem}
        </section>
    );
};

export default Cart;