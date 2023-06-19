// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import './peliculas.css'
import { getPeliculas } from '../services/usefetch'
import CardList from '../CardList/CardList'
import SearchBox from '../SearchBox/SearchBox'
import Footer from "../partes/footer"


function App() {
  //const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    async function fetchMovies() {
      let m = await getPeliculas();
      console.log(m);
      setMovies(m);
    }

    fetchMovies();

  }, []);

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h2 className='text-center mt-4 mb-3'>Últimas en taquilla</h2>
      <SearchBox
        placeholder="Búsqueda Peliculas"
        onSearchChange={(e) => setSearch(e.target.value)}
      />

      {/* contenedor que muestra los poster de las peliculas actuales */}
      <CardList movies={filteredMovies} />
      <Footer />
    </div>
  );
}

export default App;
