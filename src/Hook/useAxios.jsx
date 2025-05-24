import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://quick-shop-server.onrender.com/",
});


const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
