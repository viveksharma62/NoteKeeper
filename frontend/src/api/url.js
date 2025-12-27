import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL: 'http://localhost:4001/api/vi1/notes',
    // baseURL: 'https://notekeeper-1n1c.onrender.com/api/vi1/notes',
})

export default BACKEND_URL;