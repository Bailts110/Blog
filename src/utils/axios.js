import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/posts",
});

export { api };
