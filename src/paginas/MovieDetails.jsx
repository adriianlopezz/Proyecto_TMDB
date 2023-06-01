// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Youtube from 'react-youtube'
import { useParams } from 'react-router-dom'
import Footer from '../partes/footer'
import '../paginas/MovieDetails.css'

function MovieDetails() {
  const API_URL = 'https://api.themoviedb.org/3' //URL base de la API de TMDB
  const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd' //clave de autenticación utilizada para acceder a la API de TMDB.
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original' //URLs base para acceder a las imágenes de las películas en TMDB.

  //variables de estado
  const { id } = useParams();
  const [trailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando pelicula..." });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    //realiza una solicitud GET a la API de TMDB para obtener los detalles de una película específica utilizando el ID de la película.
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
          //se utiliza para enviar los parámetros de la solicitud
          params: {
            api_key: API_KEY,
          },
        });
        //se obtiene la respuesta de la API en la variable data y se actualiza el estado movie con esos datos utilizando la función setMovie.
        setMovie(data);
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
    };
    //obtener los detalles de la película cuando el componente se monta o cuando cambian las dependencias 
    fetchMovie();
  }, [API_URL, API_KEY, id]);



  return (
    <div>
      {movie ? (
        <div className='mt-5 mb-5'>
          <main>
            {movie ? (
              <div
                className="viewtrailer"
                style={{
                  backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                }}
              >
                {playing ? (
                  <>
                    <Youtube
                      videoId={trailer.key}
                      className="reproductor container"
                      containerClassName={"youtube-containe"}
                      opts={{
                        with: "100%",
                        height: "100%",
                        playerVars: {
                          autoplay: 1,
                          controls: 0,
                          cc_load_policy: 0,
                          fs: 0,
                          iv_load_policy: 0,
                          modestbranding: 0,
                          rel: 0,
                          showinfo: 0,
                        },
                      }}
                    />
                    <button onClick={() => setPlaying(false)} className='boton'>
                      Cerrar
                    </button>
                  </>
                ) : (
                  <div className="container">
                    <div className="">
                      {trailer ? (
                        <button
                          className="boton"
                          onClick={() => setPlaying(true)}
                          type="button"
                        >
                          Ver Trailer
                        </button>
                      ) : (
                        "Perdona las molestias, pero el trailer no está disponible"
                      )}
                      <h1 className='text-white'>{movie.title}</h1>
                      <p className='text-white'>{movie.overview}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </main>
        </div>
      ) : (
        <p>Cargando película...</p>
      )
      }
      <Footer />
    </div >
  );
}

export default MovieDetails;
