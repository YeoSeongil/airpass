import React,{useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import "../Routers/Navigation.css";


function Navigation() {
    const [toggle, setToggle] = useState(false);

    const toggleBtn = () => {
        setToggle(!toggle);
    }
    
    const location = useLocation();
    return (
        <div className={location.pathname==='/' ? 'header_nav' : 'header_nav dark'}>
            <Link to="/"><li className="header_nav_il logo">AirPass</li></Link>
            <ul className={toggle ? "header_nav_ul view" : "header_nav_ul"}>
                <Link to="/search"><li className="header_nav_il">SEARCH</li></Link>
                <Link to="/store"><li className="header_nav_il">STORE</li></Link>
                <Link to="/cart"><li className="header_nav_il">CART</li></Link>
                <Link to="/login"><li className="header_nav_il">SIGN IN</li></Link>
            </ul>
            <div className="header__nav_toggleBtn" onClick={toggleBtn}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Navigation;