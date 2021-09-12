import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})

export const getUsers = () => API.get(`/user`);
export const getUser = (id) => API.get(`/user/${id}`);

export const signinRequest = (formData) => API.post('/user/signin', formData)
export const signupRequest = (formData) => API.post('/user/signup', formData)

export const updateUser = (formData, id) => API.patch(`/user/${id}`, formData)

export const forgotPasswordAPI = (formData) => API.post('/request/forgotpassword', formData)