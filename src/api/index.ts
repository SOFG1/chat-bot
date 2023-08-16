import axios, { AxiosInstance } from "axios";

const HOST_URL = "http://185.46.8.130/";
export const API_URL = `${HOST_URL}api/v1/`;


export const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
  });
