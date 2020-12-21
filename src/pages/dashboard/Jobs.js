import React, { useEffect, useState } from 'react'
import axios from 'axios'
import JobTile from './JobTile'
import Navigation from '../../components/dashboard/Navigation'

function Jobs() {
    const [devJobs, setDevJobs] = useState([])

    useEffect(() => {
        axios.get(" https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=entry")
            .then(res => setDevJobs(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navigation />
            <div className="container mt-2">
                <h1>Junior Dev <span className="shadow">J</span>obs</h1>

                {devJobs.map(job => <JobTile key={job.id} logo={job.company_logo} company={job.company} title={job.title} type={job.type} location={job.location} />)}
            </div>
        </div>
    )
}

export default Jobs
