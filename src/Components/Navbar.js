import React, {useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom'
import './Navbar.css';
import logo from "../Components/images/prodash.png"

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