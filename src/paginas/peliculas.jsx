// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import './peliculas.css'
import { getPeliculas } from '../services/usefetch'
import CardList from '../CardList/CardList'
import SearchBox from '../SearchBox/SearchBox'
import Footer from "../partes/footer"


function App() {
  //const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  // useState te permite agregar y administrar el estado en tus componentes funcionales de React, lo que te permite crear componentes dinámicos y reactivos que responden a los cambios en el estado.
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  //Se utiliza el hook useEffect para ejecutar una función asíncrona, en este caso fetchMovies
  useEffect(() => {
    //La función fetchMovies llama a la función getPeliculas para obtener la lista de películas y actualiza el estado movies con los datos obtenidos.
    //se utiliza getPeliculas() para obtener las películas y se almacenan en la variable m
    // Finalmente, se actualiza el estado de movies utilizando setMovies(m).
    async function fetchMovies() {
      let m = await getPeliculas();
      console.log(m);
      setMovies(m);
    }

    fetchMovies();
    //El arreglo vacío [], indica que la función de efecto se ejecutará solo una vez
  }, []);

  const filteredMovies = movies.filter(movie => {
    //El método toLowerCase() se hace para realizar una comparación de búsqueda que no distinga entre mayúsculas y minúsculas.
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h2 className='text-center mt-4 mb-3'>Últimas en taquilla</h2>
      <SearchBox
        placeholder="Búsqueda Peliculas"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <CardList movies={filteredMovies} />
      <Footer />
    </div>
  );
}

export default App;
