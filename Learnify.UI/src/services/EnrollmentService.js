import { axios_config } from '../axios/axios_config';

const endpoint = '/enrollments';

export const getEnrollments = async (request) => {
    try {
        const response = await axios_config.post(`${endpoint}/get`, request);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getEnrollmentById = async (enrollmentId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${enrollmentId}`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteEnrollment = async (enrollmentId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${enrollmentId}`);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const insertEnrollment = async (insertEnrollment) => {
    try {
        const response = await axios_config.post(`${endpoint}/insert`, insertEnrollment);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateEnrollment = async (updateEnrollment) => {
    try {
        const response = await axios_config.put(endpoint, updateEnrollment);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};
