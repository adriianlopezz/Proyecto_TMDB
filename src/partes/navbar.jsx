// eslint-disable-next-line no-unused-vars
import React from "react"
import { Outlet, Link } from "react-router-dom"

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src="img/logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/' >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/peliculas' >Peliculas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default navbar