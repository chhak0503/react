import axios from "axios";
import { ARTICLE_WRITE } from "./_http";

export const getArticle = async () => {
  try {
    const response = await axios.get(``);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postArticle = async (data) => {
  try {
    const response = await axios.post(`${ARTICLE_WRITE}`, data, {
      withCredentials: true, // true로 해야 CORS 환경에서 쿠키값 전송
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
