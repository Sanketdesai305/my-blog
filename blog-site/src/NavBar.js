import React from "react";
import "./App.css";
import {Link} from "react-router-dom";
const NavBar=()=>{
    return(

    <div className="Nav">
    <ul>
        <li><Link className = "a"to="/">Home</Link></li>
        <li><Link className = "a"to="/about">About</Link></li>
        <li><Link className = "a"to="/article-list">Articles</Link></li>
        
    </ul>
    </div>
    );
}
export default NavBar;