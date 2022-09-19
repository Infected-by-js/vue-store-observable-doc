import api from "@/api";
import UserDto from "./UserDto";

export default {
  getUsers: () => {
    return api
      .get("users")
      .then(({ users }) => users.map((user) => new UserDto(user)));
  },
};
