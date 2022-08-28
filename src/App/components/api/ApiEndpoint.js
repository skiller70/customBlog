import axios from "axios";

export const END_POINT = axios.create({
    baseURL : "http://localhost:4000/blog"
}) ; 