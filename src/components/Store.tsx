import React from "react";
import '../components/Store.css'
import Item from "./Item";
import CategoryNav from "./Routers/CategoryNav";

function Store() {
    
    return (
        <div className="store">
            <CategoryNav></CategoryNav>
            <Item></Item>
        </div>
    )
}

export default Store;