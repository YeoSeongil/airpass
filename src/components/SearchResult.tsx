import React from 'react';

type Items = {
    id: number;
    product_name: string;
    price: number;
    product_img: string;
    is_checked: boolean;
}

type ProductItemProps = {
    item:Items;
}
const SearchResult = ({item}:ProductItemProps) => {
    return (
        <div>
            <img 
            className="cart-item-image"
            alt="cart-item" 
            src={item.product_img}
            />
            <span className="cart-item-name">{item.product_name}</span>
            <span className="cart-item-price">{`${item.price}원`}</span>
        </div>
    );
};

export default SearchResult;