/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Cards/Card.css';

const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

const Card = ({ serie }) => {
  return (
    <div>
      <div>
        <img
          className='col-md-6 mr-3 mb-3'
          src={`${URL_IMAGE + serie.poster_path}`}
          alt=''
          height={400}
          width='50%'
        />
        <h3 className='text-center text-danger'>{serie.name}</h3>
      </div>
    </div>
  );
}

export default Card;
