/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../Cards/Card.css';

const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

const Card = ({ movie }) => {
  return (
    <div>
      <div>
        <img
          className='col-md-6 mr-3 mb-3'
          src={`${URL_IMAGE + movie.poster_path}`}
          alt=''
          height={400}
          width='50%'
        />
        <h3 className='text-center text-danger'>{movie.title}</h3>
        <div className='text-center mb-2'>
          <Link to={`/peliculas/${movie.id}`}>Ver detalles</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
