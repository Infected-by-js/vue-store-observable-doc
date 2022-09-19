import api from "@/api";

export default {
  getPosts: (params) => api.get("posts", params).then(({ posts }) => posts),
  getTodos: (params) => api.get("todos", params).then(({ todos }) => todos),
  getComments: (params) =>
    api.get("comments", params).then(({ comments }) => comments),
};
