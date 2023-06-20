/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../SearchBox/SearchBox.css';

const SearchBox = ({ placeholder, onSearchChange }) => (
  <div className="search-box-container">
    <i className="fas fa-search search-icon"></i>
    <input
      className='search-bar'
      type='search'
      placeholder={placeholder}
      onChange={onSearchChange}
    />
    <button className="search-button">Buscar</button>
  </div>
);

export default SearchBox;
