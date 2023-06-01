// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import Youtube from 'react-youtube'
import { Link } from 'react-router-dom';
import './peliculas.css'
import Footer from "../partes/footer"


function App() {
  const API_URL = 'https://api.themoviedb.org/3' //URL base de la API de TMDB
  const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd' //clave de autenticación utilizada para acceder a la API de TMDB.
  //URLs base para acceder a las imágenes de las películas en TMDB.
  // const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //variables de estado
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  // const [trailer, setTrailer] = useState(null);
  //const [movie, setMovie] = useState({ title: "Cargando peliculas" });
  // const [playing, setPlaying] = useState(false);

  //funcion para realizar la peticion por get a la api
  const fetchMovies = async (searchKey) => { //realiza una solicitud HTTP para obtener datos de la API
    const type = searchKey ? "search" : "discover" //determina el tipo de búsqueda en base a si searchKey está presente o no
    //se realiza la solicitud GET a la API, el tipo de búsqueda y el parámetro de la clave de API.
    //Los resultados de la respuesta se desestructuran y se almacenan en la variable results
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results)
    //setMovie(results[0])
    //Si results tiene una longitud mayor a cero, se llama a la función fetchMovie pasando el id de la primera película en results
    // if (results.length) {
    //   await fetchMovie(results[0].id)
    // }

  }

  //funcion para pedir una peli/objeto y mostrarlo en video
  // const fetchMovie = async (id) => { //realiza una solicitud HTTP para obtener datos de la API
  //   const { data } = await axios.get(`${API_URL}/movie/${id}`, { //realiza una solicitud GET a la API.Se pasa la clave de API y se solicita que se incluyan los videos relacionados a la película en la respuesta.
  //     params: {
  //       api_key: API_KEY,
  //       append_to_response: "videos"
  //     }
  //   })
  //   //se verifica si data contiene la propiedad videos y si data.videos.results existe. Si es así, se busca el primer video cuyo nombre es "Trailer Oficial" utilizando el método find
  //   if (data.videos && data.videos.results) {
  //     const trailer = data.videos.results.find(
  //       (vid) => vid.name === "Trailer Oficial"
  //     );
  //     setTrailer(trailer ? trailer : data.videos.results[0])
  //   }
  //   setMovie(data)
  // }

  // const selectMovie = async (movie) => {
  //   fetchMovie(movie.id) //se realizará una solicitud para obtener información detallada de la película seleccionada.
  //   setMovie(movie) //actualiza la interfaz de usuario y mostrar detalles de la película seleccionada.
  //   window.scrollTo(0, 0) //se realiza un desplazamiento de la ventana hacia la parte superior.
  // }

  //funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault(); //evitamos que se envíe un formulario o recargue la página cuando se realiza la búsqueda.
    fetchMovies(searchKey) //se realizará una solicitud para obtener películas relacionadas con el término de búsqueda especificado en searchKey.
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div>
      <h2 className='text-center mt-5 mb-5'>Novedades de Peliculas</h2>

      {/* Buscador */}
      <form className='container mb-4 search-form search-form input search-form button' onSubmit={searchMovies}>
        <input type="text" placeholder='search' onChange={(e) => setSearchKey(e.target.value)} />
        <button className='btn btn-primary'>Buscar</button>
      </form>


      {/* aqui va el contenedor del banner y el reproductor del trailer */}
      {/* <div>
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
      </div> */}

      {/* contenedor que muestra los poster de las peliculas actuales */}
      <div className='container mt-3'>
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img className='col-md-12 mr-3 mb-3' src={`${URL_IMAGE + movie.poster_path}`} alt="" height={500} width="100%" />
              <h3 className='text-center text-danger'>{movie.title}</h3>
              <div className='text-center mb-2'>
                <Link to={`/peliculas/${movie.id}`}>Ver detalles</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
