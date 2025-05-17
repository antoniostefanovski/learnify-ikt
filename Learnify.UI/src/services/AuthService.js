import { axios_config } from '../axios/axios_config';

const endpoint = "/auth"; // Update endpoint to match backend

export const login = async (email, password) => {
    try {
        // Send email instead of username to match backend expectations
        const response = await axios_config.post(`${endpoint}/login`, { email, password });
        
        // Backend returns only a token, not a user object
        const token = response.data.token;
        localStorage.setItem('token', token);
        
        // Get user details with a separate call (you may need to implement this endpoint)
        // or decode the JWT token to get basic user info
        const user = decodeUserFromToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return response.data;
    } catch (err) {
        console.error(`Error during login: ${err.response?.data || err.message}`);
        throw err;
    }
};

// Helper function to decode JWT token (basic implementation)
const decodeUserFromToken = (token) => {
    try {
        // JWT tokens are in format: header.payload.signature
        const payload = token.split('.')[1];
        // Decode base64
        const decodedPayload = JSON.parse(atob(payload));
        
        return {
            id: decodedPayload.nameid || decodedPayload.sub,
            name: decodedPayload.name, // Common JWT claims for user ID
            email: decodedPayload.email,
            role: decodedPayload.role
        };
    } catch (e) {
        console.error('Error decoding token', e);
        return null;
    }
};

// Rest of your code remains the same
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
        
        // If not, get it from the API if we have a token
        const token = localStorage.getItem('token');
        if (token) {
            // You may need to implement this endpoint on your backend
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