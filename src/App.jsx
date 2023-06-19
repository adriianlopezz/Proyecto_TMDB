// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './partes/navbar';
import Inicio from './paginas/inicio'
import Pelicula from './paginas/peliculas'
import MovieDetails from './paginas/MovieDetails'
import Series from './paginas/Series'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/peliculas' element={<Pelicula />} />
          <Route path="/peliculas/:id" element={<MovieDetails />}/>
          <Route path='/series' element={<Series />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;