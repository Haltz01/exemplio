import axios from 'axios';

// Todas as rotas iniciam da mesma forma...
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;