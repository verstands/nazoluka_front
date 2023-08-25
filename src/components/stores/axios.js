import axios from "axios";

const axio = axios.create({
    baseURL : 'https://private-78fed-nzhotelierbackoffice.apiary-mock.com',
});

export default axio;