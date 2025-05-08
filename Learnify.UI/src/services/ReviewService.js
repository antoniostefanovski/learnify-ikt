import { axios_config } from '../axios/axios_config';

const endpoint = '/reviews';

export const getReviewsByCourseId = async (courseId) => {
    try {
        const response = await axios_config.get(`${endpoint}/course/${courseId}`);
        
        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getReviewById = async (reviewId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${reviewId}`);
       
        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteReview = async (reviewId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${reviewId}`);
        
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateReview = async (updateReview) => {
    try {
        const response = await axios_config.put(endpoint, updateReview);
        
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const insertReview = async (insertReview) => {
    try {
        const response = await axios_config.post(endpoint, insertReview);
        
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};