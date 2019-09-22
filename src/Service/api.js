import axios from "axios";
//importa a url do webserver
import { apiUrl } from "../Config/config.json";

//Inicia uma instancio do axios (https://github.com/axios/axios)
const api = axios.create({
  baseURL: apiUrl
});

export default api;
