import { axios_config } from '../axios/axios_config';

const endpoint = '/course';

export const createCourse = async (course) => {
    try {
        const response = await axios_config.post(`${endpoint}/create`, course);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getCourseById = async (id) => {
    try {
        const response = await axios_config.get(`${endpoint}/${id}`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getAllCourses = async () => {
    try {
        const response = await axios_config.get(`${endpoint}`);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateCourse = async (id, course) => {
    try {
        const response = await axios_config.put(`${endpoint}/${id}`, course);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteCourse = async (id) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${id}`);
        return response.status === 204;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};
