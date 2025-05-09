import { axios_config } from '../axios/axios_config';

const endpoint = '/answers';

export const getAnswers = async (questionId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${questionId}`);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};

export const getAnswer = async (answerId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${answerId}/get`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};

export const deleteAnswer = async (answerId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${answerId}`);
        
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};

export const insertAnswer = async (answerRequest) => {
    try {
        const response = await axios_config.post(`${endpoint}`, answerRequest);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};

export const updateAnswer = async (updateAnswer) => {
    try {
        const response = await axios_config.put(`${endpoint}`, updateAnswer);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err}`);

        throw err;
    }
};
