import React,{useState, useEffect} from 'react';
import ItemDis, { Items } from './ItemDis';
import "./Item.css"

const Item = () => {
    const [test, setTest] = useState([]);

    useEffect(()=>{
        fetch("/data/test.json")
        .then(res=>res.json())
        .then(res=>setTest(res.productList))
    },[])

    const itemList = test.map((item:Items)=>{
        return <ItemDis key={item.id} item={item}></ItemDis>
    })

    return (
        <section className="item_list">
            <div className="item_list_container">
                {itemList}
            </div>
        </section>
    );
};

export default Item;