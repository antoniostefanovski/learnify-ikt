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

export const login = async (loginUserDto) => {
    try {
        const response = await axios_config.post(`${endpoint}/login`, loginUserDto);

        if (response.status === 200) {
            return response.data.token;
        }

        return null;
    } catch (err) {
        console.error(`Error during the request: ${err}`);
        
        throw err;
    }
};