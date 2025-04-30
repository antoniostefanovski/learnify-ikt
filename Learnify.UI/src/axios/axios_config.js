import axios from "axios";

export const axios_config = axios.create({
    baseURL: 'http://localhost:5156/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});