import React from 'react'
import { Outlet } from 'react-router-dom'

const JobLayout = () => {
    return (
        <div>
            <h2>
                Jobs Openning
            </h2>
            <p>List current job</p>
            <Outlet></Outlet>
        </div>
    )
}

export default JobLayout