import React,{useState,useEffect} from 'react';
import { Items } from './ItemDis';
import "./Search.css";
import SearchResult from './SearchResult';

const Search = () => {
    const [test, setTest] = useState([]);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    useEffect(()=>{
        fetch("/data/test.json")
        .then(res=>res.json())
        .then(res=>setTest(res.productList))
    },[])

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        setSearch(value);
    }

    const onSearchHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = test.filter((item:Items)=>{
           return item.product_name.toLowerCase().includes(search)
        })
        setResult(data);
    }
    
    console.log(result);

    return (
        <div>
            <form className="search_box" onSubmit={onSearchHandler}>
                <input
                    type="text"
                    value={search}
                    onChange={onChangeHandler}
                    placeholder="search">
                </input>
            </form>
            <section className="search_result">
                <div className="search_result_box">
                    {result.map((item:Items)=> {
                        return <SearchResult item={item}></SearchResult>
                    })}
                </div>
            </section>
        </div>
    );
};

export default Search;