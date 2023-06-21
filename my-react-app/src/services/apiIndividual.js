import axios from 'axios'

const api_individual = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default api_individual