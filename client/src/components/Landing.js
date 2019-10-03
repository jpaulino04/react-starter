import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
            <div className="bg-dark">
                <div className="text-center text-white">
                    <h1 className="x-large">DevOps Engineering</h1>
                    <p className="lead">
                    Create a developer profile/portfolio, share posts and get help from
                    other developers
                    </p>
                    <div className="buttons">
                        <Link to="/login" className="btn btn-light">Login</Link>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Landing
