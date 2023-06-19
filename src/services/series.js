const url = 'https://api.themoviedb.org/3/tv/popular';
const API_KEY = '2cfc80a5b2ac65781ad0833ad2be99cd';

// función que devuelve las series de la API
export async function getSeries() {
    const response = await fetch(`${url}?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data)
    return data.results;
    
}
