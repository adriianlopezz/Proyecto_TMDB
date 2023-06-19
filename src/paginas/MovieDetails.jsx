// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../partes/footer';
import { getPeliculaDetails } from '../services/movieDetails';
import '../paginas/MovieDetails.css';

function MovieDetails() {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

  const { id } = useParams();
  const [movie, setMovie] = useState({ title: 'Cargando película...' });

  useEffect(() => {
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
