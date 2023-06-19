const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd';

// función que devuelve los detalles de películas de la API
export async function getPeliculaDetails(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
