const axios = require('axios');

export const httpClient = axios.create({
    baseUrl: process.env.REACT_APP_API_URL
})