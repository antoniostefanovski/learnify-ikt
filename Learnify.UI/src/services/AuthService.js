import { axios_config } from '../axios/axios_config';

const endpoint = "/auth"; // Update endpoint to match backend

export const login = async (email, password) => {
    try {
        const response = await axios_config.post(`${endpoint}/login`, { email, password });
        
        const token = response.data.token;
        localStorage.setItem('token', token);
        
        const user = decodeUserFromToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return response.data;
    } catch (err) {
        console.error(`Error during login: ${err.response?.data || err.message}`);
        throw err;
    }
};

const decodeUserFromToken = (token) => {
    try {
        const payload = token.split('.')[1];

        const decodedPayload = JSON.parse(atob(payload));
        
        return {
            id: decodedPayload.nameid || decodedPayload.sub,
            name: decodedPayload.name,
            email: decodedPayload.email,
            role: decodedPayload.role
        };
    } catch (e) {
        console.error('Error decoding token', e);
        return null;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    window.location.replace('/login');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const getCurrentUser = async () => {
    try {
        const userData = localStorage.getItem('user');
        if (userData) {
            return JSON.parse(userData);
        }

        const token = localStorage.getItem('token');
        if (token) {
            const response = await axios_config.get(`${endpoint}/me`);
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data));
                return response.data;
            }
        }
        
        return null;
    } catch (err) {
        console.error(`Error getting current user: ${err.response?.data || err.message}`);
        return null;
    }
};

export const register = async (registerUserDto) => {
    try {
        const response = await axios_config.post(`${endpoint}/register`, registerUserDto);

        if (response.status == 200) {
            window.location.replace('/login');
        }
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};

export const AuthService = {
    login,
    logout,
    isAuthenticated,
    getCurrentUser
};