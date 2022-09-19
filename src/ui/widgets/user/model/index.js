import StoreObservable, { createState } from "@/lib/store-observable-package";
import getters from "./getters";
import actions from "./actions";

export default (initialState = {}) => {
  const state = createState(initialState);

  return new StoreObservable({
    state,
    getters,
    actions,
  });
};
