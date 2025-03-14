import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetail = () => {

    const jobDetail = useLoaderData()

    return (
        <div className='job-details'>
            <p><b>Job Title: </b>{jobDetail.title}</p>
            <p><b>Salary: </b>{jobDetail.salary}</p>
            <p><b>job Location: </b>{jobDetail.location}</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDetail

export const jobsDetailLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch("http://localhost:5000/jobs/" + id)
    if (!res.ok) {
        throw Error('Could not found job detail')
    }
    return res.json()
}