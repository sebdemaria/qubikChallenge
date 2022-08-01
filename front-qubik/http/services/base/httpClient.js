import axios from "axios";

export const HttpClient = (BASE_URL) =>
    axios.create({
        baseURL: BASE_URL,
        timeout: 1000,
    });
