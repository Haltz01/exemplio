import axios from 'axios';
import { backendLocation } from '../options.json';

// Todas as rotas iniciam da mesma forma...
const api = axios.create({
    baseURL: backendLocation || 'http://localhost:3333'
});

export default api;