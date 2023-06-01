// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube'
import { useParams } from 'react-router-dom';
import '../paginas/MovieDetails.css'

function MovieDetails() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

  const { id } = useParams();
  const [trailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando peliculas" });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(data);
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
    };

    fetchMovie();
  }, [API_URL, API_KEY, id]);



  return (
    <div>
      {movie ? (
        <div className='mt-5'>
          {/* <h1 className='text-center'>{movie.title}</h1>
          <img className="justify-content-center align-items-center" src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} height={500} width="30%"/>
          <p>{movie.overview}</p>
          <div> */}
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
    </div >
  );
}

export default MovieDetails;
