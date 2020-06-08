import retrieveData from './retrieve-data'

export default async (localStorageKey, urlToRetrieveFrom, responseHandler) => {
    if (localStorage.getItem(localStorageKey)) {
        const data = JSON.parse(localStorage.getItem(localStorageKey));
        return data;
    }

    const data = await retrieveData(urlToRetrieveFrom, responseHandler);
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    return data;
};