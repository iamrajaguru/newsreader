import Axios from "axios";
require("dotenv").config();
export const loadNewsList = (key, value) => ({
  type: "LOAD_NEWSLIST",
  key,
  value,
});
export const getNewsList = (current) => async (dispatch) => {
  try {
    const response = await Axios.get(
      current
        ? `https://newsapi.org/v2/top-headlines?sources=${current}&apiKey=${process.env.REACT_APP_TOKEN}`
        : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_TOKEN}`
    );
    dispatch(loadNewsList("articles", response.data.articles));
  } catch (error) {
    console.log(error);
  }
};
