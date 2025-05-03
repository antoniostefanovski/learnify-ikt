const endpoint = '/lessons';

export const insertLesson = async (insertLesson) => {
    try {
        const response = await axios_config.post(endpoint, insertLesson);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getLessonById = async (lessonId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${lessonId}/get`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the response: ${err.response}`);

        throw err;
    }
};

export const getLessons = async (moduleId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${moduleId}`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.log(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateLesson = async (updateLesson) => {
    try {
        const response = await axios_config.put(endpoint, updateLesson);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteLesson = async (lessonId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${lessonId}`);

        return response.status === 200;
    } catch (err) {
        console.log(`Error during the request: ${err.response}`);

        throw err;
    }
}
