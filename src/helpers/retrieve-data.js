import axios from 'axios';

export default async (urlToRetrieveFrom, responseHandler) => {
    let data = [];
    try {
        const axiosResponse = await axios.get(urlToRetrieveFrom);
        data = responseHandler(axiosResponse.data);
    } catch (err) {
        console.error(err);
    }

    return data;
};