import axios from 'axios';

export const api = axios.create({
    baseURL: "https://tasks-iago.herokuapp.com",
});