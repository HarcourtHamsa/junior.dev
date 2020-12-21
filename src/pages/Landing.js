import React from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import './Landing.scss'

function Landing() {
    return (
        <header>
            <NavigationBar />
            <div id="jumbotron">
                <div className="container">
                    <p><span id="label">New</span>MONOGRAPH DASHBOARD</p>
                    <h1>Building Africa's Future <span className="shadow">T</span>alents</h1>
                    <Link to="/login">Get Started</Link>
                </div>
            </div>

            
        </header>
    )
}

export default Landing
