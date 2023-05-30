// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './partes/navbar';
import Inicio from './paginas/inicio'
import Peliculas from './paginas/peliculas'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/Peliculas' element={<Peliculas />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;