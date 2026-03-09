import axios from 'axios'

// BASE DA URL:  https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/popular?api_key=034ab4707e90adc0815559e5687082e1&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"

})

export default api