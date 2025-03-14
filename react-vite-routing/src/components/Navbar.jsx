import React from 'react'
import react from '../assets/react.svg'

import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <img src={react} alt='' width='130px'></img>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/product'><li>Product</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/jobs'><li>Jobs</li></NavLink>
            </ul>
            <button onClick={() => navigate('/about', { replace: true })}>Get Started</button>
        </div>
    )
}

export default Navbar