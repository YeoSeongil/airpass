import React,{useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import "../Routers/Navigation.css";
import {useSelector} from "react-redux"
import { RootState } from '../Reducer/_rootReducer';


function Navigation() {
    const [toggle, setToggle] = useState(false);
    const cart = useSelector((state:RootState)=>state.cartReducer);

    const toggleBtn = () => {
        setToggle(!toggle);
    }
    
    const location = useLocation();
    return (
        <div className={location.pathname==='/' ? 'header_nav' : 'header_nav dark'}>
            <Link to="/"><li className="header_nav_il logo">AirPass</li></Link>
            <ul className={toggle ? "header_nav_ul view" : "header_nav_ul"}>
                <Link to="/search" onClick={toggleBtn}><li className="header_nav_il">SEARCH</li></Link>
                <Link to="/store" onClick={toggleBtn}><li className="header_nav_il">STORE</li></Link>
                <Link to="/cart" onClick={toggleBtn}><li className="header_nav_il">CART
                    <div className="cart-amount">{cart.length}</div>
                </li></Link>
                <Link to="/login" onClick={toggleBtn}><li className="header_nav_il">SIGN IN</li></Link>
            </ul>
            <div className="header__nav_toggleBtn" onClick={toggleBtn}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Navigation;