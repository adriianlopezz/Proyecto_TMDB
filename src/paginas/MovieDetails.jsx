// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../partes/footer';
import { getPeliculaDetails } from '../services/movieDetails';
import '../paginas/MovieDetails.css';

function MovieDetails() {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

  //Se utiliza el hook useParams() de React Router para obtener el valor del parámetro de ruta llamado id.
  // useState te permite agregar y administrar el estado en tus componentes funcionales de React, lo que te permite crear componentes dinámicos y reactivos que responden a los cambios en el estado.
  const { id } = useParams();
  const [movie, setMovie] = useState({ title: 'Cargando película...' });

  //Se utiliza el hook useEffect para ejecutar una función asíncrona, en este caso fetchSeries
  useEffect(() => {
    //Se define la función fetchMovie() como una función asincrónica
    //Se obtienen los detalles de una película utilizando la función getPeliculaDetails()
    //Se actualiza el estado de la película usando setMovie(data).
    const fetchMovie = async () => {
      try {
        const data = await getPeliculaDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="mt-5">
      <div
        className="viewtrailer"
        style={{
          backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
        }}
      >
        <h1 className="text-white">{movie.title}</h1>
        <p className="text-white">{movie.overview}</p>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetails;
