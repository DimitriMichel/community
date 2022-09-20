import Axios from 'axios'
//import { API_URL } from "envi"
export const axios = Axios.create({
    baseURL: "http:/localhost:80/",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});