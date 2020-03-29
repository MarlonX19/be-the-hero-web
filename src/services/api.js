import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bethehero-x19.herokuapp.com/'
})

export default api;