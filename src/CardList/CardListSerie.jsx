/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CardSerie from '../Cards/CardSerie';
import '../CardList/CardList.css';

const CardList = ({ series }) => {
  return (
    <div className='card-list'>
      {series && series.map(serie =>
        <CardSerie serie={serie} key={serie.id} />
      )}
    </div>
  );
};

export default CardList;
