// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './peliculas.css'
import Footer from "../partes/footer"


function App() {
  const API_URL = 'https://api.themoviedb.org/3' //URL base de la API de TMDB
  const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd' //clave de autenticación utilizada para acceder a la API de TMDB.
  //URLs base para acceder a las imágenes de las películas en TMDB.
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //variables de estado
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")

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

  }

  //funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault(); //evitamos que se envíe un formulario o recargue la página cuando se realiza la búsqueda.
    fetchMovies(searchKey) //se realizará una solicitud para obtener películas relacionadas con el término de búsqueda especificado en searchKey.
  }

  //useEffect llama a la función fetchMovies cuando el componente se monta por primera vez
  useEffect(() => {
    fetchMovies(); //función que realiza una solicitud HTTP para obtener películas
  }, [])

  return (
    <div>
      <h2 className='text-center mt-4 mb-3'>Últimas en taquilla</h2>

      {/* Buscador */}
      <form className='container mb-4 search-form search-form input search-form button' onSubmit={searchMovies}>
        <input type="text" placeholder='search' onChange={(e) => setSearchKey(e.target.value)} />
        <button className='btn btn-primary'>Buscar</button>
      </form>

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
