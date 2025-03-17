import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "../styles/Navbar.css"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.classList.add('dark');
        } else {
            setTheme('light');
            document.body.classList.remove('dark');
        }
    }

    return (

        <nav className="navbar" >

            <div className="navbar-left">

                <button className='togglebutton' onClick={toggleTheme}>
                    {theme === 'light' ? "Switch To Dark Mode" : "Switch To Light Mode"}
                </button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`navbar-right ${isOpen ? 'open' : ''}`} >
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)} >About</Link>
                <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)} >Gallery</Link>
                <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)} >Contact</Link>
            </div >
        </nav >

    )
}

export default Navbar