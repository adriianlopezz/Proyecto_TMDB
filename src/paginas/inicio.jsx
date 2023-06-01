// eslint-disable-next-line no-unused-vars
import React from "react"
import Footer from "../partes/footer"

const inicio = () => {
    return (
        <div>
            <div className="container mx-auto text-center">
                <h1 className="text-white p-2 bg-dark text-center mt-3">Base de datos de peliculas TMDB</h1>
                <figure>
                    <blockquote className="blockquote">
                        <p className="mt-3 mx-auto text-white bg-dark">
                            Themoviedb.org es una base de datos gratuita y abierta con millones de datos relacionados con el mundo del cine.
                            Es usada cada mes por miles de aplicaciones que aprovechan su API para mostrar informaciones de todo tipo sobre las más variadas pelí­culas, siendo la fuente de datos de centros tan conocidos como Moovida, XBMC, Plex, MythTV o MediaPortal.
                            Sin duda una aplicación interesante para los que están pensando en crear un videoclub online, un sitio de crí­ticas o una videoteca y no pueden incluir datos de todas las pelí­culas dentro de su propio sistema.                        </p>
                    </blockquote>
                </figure>
            </div>
            <Footer />
        </div>
    )
}

export default inicio