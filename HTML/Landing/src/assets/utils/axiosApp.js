import axios from "axios";
const API_URL="https://heremynft.herokuapp.com/";

export const axiosApp = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type":'application/json;charset=UTF-8',
    },
  });

  axiosApp.interceptors.request.use( 
    function (config) {   
      config.headers.token = localStorage.getItem("token");   
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosApp.interceptors.response.use(
    (response) => {      
      return response;
      
    },
    (error) => {
        console.log(error);
        
      throw error;
    }
  );
