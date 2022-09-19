import Vue from "vue";
import { boundDispatch } from "./store-utils";

export class StoreObservable {
  constructor({ state, actions, getters }) {
    this.state = state.state();
    this.actions = actions;
    this.getters = getters;

    this.dispatch = (type, payload) => {
      return state.dispatch.call(this, type, payload);
    };
  }
}

export const createState = (initState) => {
  const state = Vue.observable(initState);

  return {
    state: () => state,

    dispatch(type, payload) {
      return boundDispatch.call(this, type, payload);
    },
  };
};
