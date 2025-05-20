import { axios_config } from '../axios/axios_config';

const endpoint = '/chatbot';

export const sendMessageToChatbot = async (message) => {
    try {
        const response = await axios_config.post(`${endpoint}/message`, JSON.stringify(message), {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 30000,
        });

        return response.status === 200 ? response.data : null;
    } catch (err) {
        console.error(`Error sending message to chatbot: ${err}`);
        throw err;
    }
};

