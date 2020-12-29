import React from 'react'
import Navigation from '../../components/dashboard/Navigation'
import './Home.scss'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory()
    return (
        <>
            <Navigation />
            <div className="container mt-2 mb-5">
                <h1>Welcome <span className="shadow">B</span>oss</h1>
                <p>What would you like to do today?</p>

                <div id="grid-section">
                    <div id="box1" tabIndex="0" onClick={() => history.push("/dashboard/connect")}>
                        <p className="box-label">Connect</p>
                    </div>

                    <div id="box2" tabIndex="0" onClick={() => history.push("/dashboard/practice")}>
                        <p className="box-label">Practice</p>
                    </div>

                    <div id="box3" tabIndex="0" onClick={() => history.push("/dashboard/jobs")}>
                        <p className="box-label">Find Jobs</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
