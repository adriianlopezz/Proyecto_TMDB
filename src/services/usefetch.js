const url = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd';

// función que devuelve las películas de la API
export async function getPeliculas() {
  const response = await fetch(`${url}?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data.results;
}
