// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom'
import "../partes/footer.css"

const footer = () => {

    return (
        <div>
            <footer className="text-white py-4 bg-dark footer">
                <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex aling-items-center justify-content-center">
                            <img src="img/logo.jpg" className="mx-2" width='150' height='80'/>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled text-center">
                            <li className="font-weight-bold mb-2">THE MOVIE DATABASE</li>
                            <li className="text-center">Sitio usado para buscar información sobre cine, peliculas, etc</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled text-center">
                            <li className="font-weight-bold mb-2">Enlaces en la página</li>
                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/peliculas'>Peliculas</Link>
                            </li>
                            <li>
                                <Link to='/series'>Series de televisión</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled text-center">
                            <li className="font-weight-bold mb-2">Enlaces externos</li>
                            <li>
                                <Link to='https://www.aepd.es/es/politica-de-privacidad-y-aviso-legal'>Politica de privacidad</Link>
                            </li>
                            <li>
                                <Link to='https://www.interior.gob.es/opencms/es/politica-de-cookies/'>Politica de cookies</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default footer