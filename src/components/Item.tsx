import React,{useState, useEffect} from 'react';

const Item = () => {
    const [test, setTest] = useState([]);

    useEffect(()=>{
        fetch("/data/test.json")
        .then(res=>res.json())
        .then(res=>setTest(res.productList))
    },[])

    console.log(test);
    return (
        <div>
            
        </div>
    );
};

export default Item;