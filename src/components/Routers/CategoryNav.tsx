import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import '../Routers/CategoryNav.css'
const CategoryNav = () => {
    
    return (
        <div>
            <div className="category_nav">
                <ul className="category_nav_ul">
                    <Link to="/store"><li className="category_nav_li">ALL</li></Link>
                    <Link to="/store/package"><li className="category_nav_li">PACKAGE</li></Link>
                    <Link to="/store/recomand"><li className="category_nav_li">RECOMAND</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default CategoryNav;