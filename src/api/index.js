const BASE_URL = "https://dummyjson.com";

export default {
  get: (url = "", params = null) => {
    const query = params ? `?${new URLSearchParams(params)}` : "";

    return fetch(BASE_URL + `/${url}${query}`).then((json) => json.json());
  },
};
