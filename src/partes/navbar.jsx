// eslint-disable-next-line no-unused-vars
import React from "react"
import { Outlet, Link } from "react-router-dom"
import "../partes/navbar.css"

const navbar = () => {
    return (
        <div className="text-white header header">
            <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src="img/logo.jpg" alt="" width='90' height='50'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link className="nav-link font-weight-bold text-white" to='/' >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold text-white" to='/peliculas' >Peliculas</Link>
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