import { HttpClient } from "./base/httpClient";

export const getSearch = async (BASE_URL: string, ENDPOINT: string) => {
    try {
        const response = await HttpClient(BASE_URL).get(ENDPOINT);
        return response.data;
    } catch (err) {
        return err;
    }
};
