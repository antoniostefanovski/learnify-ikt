import { axios_config } from '../axios/axios_config';

const endpoint = '/questions';

export const getAllQuestions = async () => {
    try {
        const response = await axios_config.get(endpoint);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuestionById = async (questionId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${questionId}`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuestionWithAnswers = async (questionId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${questionId}/answers`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuestionsByQuiz = async (quizId) => {
    try {
        const response = await axios_config.get(`${endpoint}/quiz/${quizId}`);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getQuestionsWithAnswersByQuiz = async (quizId) => {
    try {
        const response = await axios_config.get(`${endpoint}/quiz/${quizId}/withanswers`);
       
        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const insertQuestion = async (questionRequest) => {
    try {
        const response = await axios_config.post(endpoint, questionRequest);
       
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateQuestion = async (updateQuestion) => {
    try {
        const response = await axios_config.put(endpoint, updateQuestion);
        
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteQuestion = async (questionId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${questionId}`);
        
        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};
