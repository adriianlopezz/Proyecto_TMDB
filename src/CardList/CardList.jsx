/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../Cards/Card';
import '../CardList/CardList.css';

const CardList = ({ movies }) => {
  return (
    <div className='card-list text-center mt-3'>
      {/* se utiliza el método map() para iterar sobre cada elemento del array de películas */}
      {movies.map(movie =>
        <Card movie={movie} key={movie.url} />
      )}
    </div>
  );
};

export default CardList;
