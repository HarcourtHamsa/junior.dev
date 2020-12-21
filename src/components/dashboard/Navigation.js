import React, { useState } from 'react'
import { RiUser3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import svg from '../../img/logo.svg'

import './Navigation.scss'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    function logout() {
        localStorage.removeItem('currentUser')
    }

    return (
        <div>
            <div id="dashboard-nav">
                <img src={svg} alt="" />
                <span
                    className={isOpen ? "shadow" : null}
                    onClick={toggle}> <RiUser3Line size={30} /></span>
            </div>

            {
                isOpen ?
                    <div className="menu">
                         <Link to="/dashboard">Dashboard</Link>
                        <Link to="/">Profile</Link>
                        <Link to="/">Settings</Link>
                        <Link to="/" onClick={logout}>Logout</Link>
                    </div>
                    : null
            }
        </div>
    )
}

export default Navigation
