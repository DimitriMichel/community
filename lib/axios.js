import Axios from 'axios'
//import { API_URL } from "envi"
export const communityAPI = Axios.create({
    baseURL: "http://localhost:80/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});