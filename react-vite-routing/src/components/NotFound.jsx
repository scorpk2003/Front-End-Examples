import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>
                404 | Page Not Found
            </h1>
            <br></br>
            <button onClick={() => navigate('/')}>
                Go to Home
            </button>
        </div>
    )
}

export default NotFound