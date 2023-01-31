import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from "./images/prodash.png"

function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/home">
                <button className="navbar-logo-button-wrapper">
                    <img className="navbar-logo" src={logo}></img>
                </button>
                
            </Link>
        </nav>
        
    )
}
export default Navbar;