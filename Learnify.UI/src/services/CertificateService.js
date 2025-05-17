import { axios_config } from '../axios/axios_config';

const endpoint = "/certificate";

export const getCertificatesByCourse = async (courseId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${courseId}/course`);

        return response.status == 200 ? response.data : undefined;
    }
    catch(err) 
    {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
}

export const GetCertificatesByStudent = async (studentId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${studentId}/student`);

        return response.status == 200 ? response.data : undefined;
    }
    catch(err) 
    {
        console.error(`Error during the request: ${err.response}`);
        
        throw err;
    }
}

export const getCertificate = async (certificateId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${certificateId}`);

        return response.status == 200 ? response.data : undefined;
    }
    catch(err) 
    {
        console.error(`Error during the request: ${err.response}`);

        throw err;
    }
}

export const addCertificate = async (addCertificate) => {
    try {
        const response = await axios_config.post(`${endpoint}`, addCertificate);

        return response.status == 200;
    }
    catch(err) 
    {
        console.error(`Error during the request: ${err}`);
        throw err;
    }
}

export const updateCertificate = async (updateCertificate) => {
    try {
        const response = await axios_config.put(`${endpoint}`, updateCertificate);

        return response.status == 200;
    }
    catch(err) 
    {
        console.error(`Error during the request: ${err}`);
        throw err;
    }
}

export const downloadCertificate = async (courseId) => {
    try {
        const response = await axios_config.get(`${endpoint}/${courseId}/download`, {
            responseType: 'blob',
        });

        if (response.status === 200) {
            const url = window.URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `certificate${new Date().toISOString()}.pdf`);
            document.body.appendChild(link);
            link.click();
            
            // Cleanup
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(link);
            }, 100);
            
            return true;
        }

        return false;
    } catch (err) {
        console.error('Error downloading certificate:', err);
        throw err;
    }
};