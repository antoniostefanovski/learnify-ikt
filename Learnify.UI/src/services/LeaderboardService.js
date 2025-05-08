import { axios_config } from '../axios/axios_config';

const endpoint = "/leaderboard";

export const getLeaderboard = async () => {
    try {
        const response = await axios_config.get(`${endpoint}`);

        return response.status == 200 ? response.data : [];
    } catch (err) {
        console.error(`Error during the request: ${err.response}`);
        
        throw err;
    }
};