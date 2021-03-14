import React from 'react';
import { Items } from './ItemDis';
import {useDispatch} from 'react-redux';
import { delCart } from './Reducer/_actions';
import "./CartItem.css";
type CartItemProps = {
    item:Items
}


const CartItem = ({item}:CartItemProps) => {
    const dispatch = useDispatch();

    const HandleOnclick = () => {
        dispatch(delCart(item));
    }

    return (
        <div className="cart-item">
            <img 
            className="cart-item-image"
            alt="cart-item" 
            src={item.product_img}
            />
            <span className="cart-item-name">{item.product_name}</span>
            <span className="cart-item-price">{`${item.price}원`}</span>
            <i className="fas fa-trash-alt" onClick={HandleOnclick}></i>
        </div>
    );
};

export default CartItem;