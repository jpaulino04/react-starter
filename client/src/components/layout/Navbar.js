import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar bg-dark">
                <h1 className="navbar-brand">
                    <Link to="/"><i className="fas fa-code"></i> DevOps</Link>
                </h1>
                <ul>
                    <li className="main-li lead"><Link to="/">Developers</Link></li>
                </ul>
            </nav>
        </Fragment>        
    )
}

export default Navbar
