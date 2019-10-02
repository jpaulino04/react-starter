import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-light">
            <h1>
                <Link to="/api/index"><i className="fas fa-code"></i> DevOps</Link>
            </h1>
            <ul>
                <li><Link to="!#">Developers</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
