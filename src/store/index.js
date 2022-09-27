import StoreObservable, { createState } from "@/lib/store-observable-package";
import getters from "./getters";
import actions from "./actions";
import state from "./state";

export default (initialState = state()) => {
  const state = createState(initialState);

  return new StoreObservable({
    state,
    getters,
    actions,
  });
};
