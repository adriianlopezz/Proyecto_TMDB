// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './peliculas.css';
import { getSeries } from '../services/series';
import CardListSerie from '../CardList/CardListSerie';
import SearchBox from '../SearchBox/SearchBox';
import Footer from '../partes/footer';

function App() {
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchSeries() {
            let s = await getSeries();
            console.log(s);
            setSeries(s);
        }

        fetchSeries();
    }, []);

    const filteredSeries = series.filter(serie => {
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
