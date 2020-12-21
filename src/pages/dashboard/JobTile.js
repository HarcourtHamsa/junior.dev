import React from 'react'
import './JobTile.scss'

function JobTile({ logo, company, type, title, location }) {
    return (
        <div id="job-tile" className="shadow">
            <div>
                <h2 id="company">{company}</h2>
                <p id="title">{title} </p>
                <p id="type">{type}</p>
                <p id="location">{location}</p>
            </div>

        </div>
    )
}

export default JobTile
