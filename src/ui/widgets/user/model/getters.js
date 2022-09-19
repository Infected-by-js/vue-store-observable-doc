import { getterTypes } from "./types";

export default {
  [getterTypes.username]: (state) => state.username,
  [getterTypes.gender]: (state) => state.gender,
  [getterTypes.email]: (state) => state.email,
  [getterTypes.phone]: (state) => state.phone,
  [getterTypes.image]: (state) => state.image,
  [getterTypes.postsCount]: (state) => state.postsCount,
  [getterTypes.todosCount]: (state) => state.todosCount,
  [getterTypes.commentsCount]: (state) => state.commentsCount,
};
