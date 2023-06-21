// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './peliculas.css';
import { getSeries } from '../services/series';
import CardListSerie from '../CardList/CardListSerie';
import SearchBox from '../SearchBox/SearchBox';
import Footer from '../partes/footer';

function App() {
    // useState te permite agregar y administrar el estado en tus componentes funcionales de React, lo que te permite crear componentes dinámicos y reactivos que responden a los cambios en el estado.
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState('');

    //Se utiliza el hook useEffect para ejecutar una función asíncrona, en este caso fetchSeries
    useEffect(() => {
        //La función fetchSeries llama a la función getPeliculas para obtener la lista de películas y actualiza el estado series con los datos obtenidos.
        //se utiliza getSeries() para obtener las películas y se almacenan en la variable s
        // Finalmente, se actualiza el estado de movies utilizando setSeries(s).
        async function fetchSeries() {
            let s = await getSeries();
            console.log(s);
            setSeries(s);
        }

        fetchSeries();
        //El arreglo vacío [], indica que la función de efecto se ejecutará solo una vez
    }, []);

    const filteredSeries = series.filter(serie => {
        //El método toLowerCase() se hace para realizar una comparación de búsqueda que no distinga entre mayúsculas y minúsculas.
        return serie.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <h2 className='text-center mt-4 mb-3'>Series más populares</h2>
            <SearchBox
                placeholder="Búsqueda Series"
                onSearchChange={(e) => setSearch(e.target.value)}
            />

            <CardListSerie series={filteredSeries} />
            <Footer />
        </div>
    );
}

export default App;
