/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CardSerie from '../Cards/CardSerie';
import '../CardList/CardList.css';

const CardList = ({ series }) => {
  return (
    <div className='card-list text-center mt-3'>
            {/* se utiliza el método map() para iterar sobre cada elemento del array de series */}
      {series.map(serie =>
        <CardSerie serie={serie} key={serie.id} />
      )}
    </div>
  );
};

export default CardList;
