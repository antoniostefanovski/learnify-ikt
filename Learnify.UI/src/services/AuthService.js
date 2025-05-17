import { axios_config } from '../axios/axios_config';

const endpoint = "/auth";

export const register = async (registerUserDto) => {
    try {
        const response = await axios_config.post(`${endpoint}/register`, registerUserDto);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios_config.post(`${endpoint}/login`, { username, password });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch (err) {
        console.error(`Error during login: ${err.response?.data || err.message}`);
        throw err;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const getCurrentUser = async () => {
    try {
        // First check if we have user data in localStorage
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

export const AuthService = {
    login,
    logout,
    isAuthenticated,
    getCurrentUser
};