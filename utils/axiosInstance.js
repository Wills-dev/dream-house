import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const axiosInstance = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "099b1bf424msh4d8c88152d08bd1p1f836ejsnded04c1beb1f",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
