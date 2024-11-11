import axios from "axios";

import {baseURL} from "../constants/urls";

const axiosInstance = axios.create({
    baseURL,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
});

export {axiosInstance};