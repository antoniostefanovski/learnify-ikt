import { axios_config } from '../axios/axios_config';

const endpoint = '/quizzes'

export const getAllQuizzes = async () => {
    try {
        const response = await axios_config.get(endpoint);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuizById = async (quizId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${quizId}`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuizWithQuestions = async (quizId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${quizId}/questions`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuizzesByCourse = async (courseId) => {
    try {
        const response = await axios_config.get(`${endpoint}/course/${courseId}`);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const insertQuiz = async (quizRequest) => {
    try {
        const response = await axios_config.post(endpoint, quizRequest);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateQuiz = async (updateQuiz) => {
    try {
        const response = await axios_config.put(endpoint, updateQuiz);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteQuiz = async (quizId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${quizId}`);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};
