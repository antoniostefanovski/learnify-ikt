const endpoint = '/modules';

export const insertModule = async (insertModule) => {
    try {
        const response = await axios_config.post(endpoint, insertModule);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getModuleById = async (moduleId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${moduleId}/get`);

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const getAllModules = async (courseId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${courseId}`);

        return response.status === 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const updateModule = async (updateModule) => {
    try {
        const response = await axios_config.put(endpoint, updateModule);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};

export const deleteModule = async (moduleId) => {
    try {
        const response = await axios_config.delete(`${endpoint}/${moduleId}`);

        return response.status === 200;
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
};
