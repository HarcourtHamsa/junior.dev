import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import svg from '../img/logo.svg'
import './NavigationBar.scss'

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }
    return (
        <nav>
            <img src={svg} alt="logo" />

            <div id="nav-links" className={isOpen ? "open" : null} >
                <Link to="/">Home</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Signup</Link>
            </div>

            <div id="hamburger-menu" onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}

export default NavigationBar
