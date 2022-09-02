import axios from "axios";

export const END_POINT = axios.create({
    baseURL : "http://localhost:4000/blog"
}) ; 

const MAIN_END_POINT = "https://luckyskiller.herokuapp.com/blog"

export const REGISTER_END_POINT = `${MAIN_END_POINT}/register`;



export const LOGIN_END_POINT = `${MAIN_END_POINT}/login`;
