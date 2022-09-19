import { normalizeMap } from "./store-utils";

export const mapState = (properties = []) => {
  const res = {};

  normalizeMap(properties).forEach(({ key, val }) => {
    res[key] = function mappedState() {
      const state = this.store.state;

      return typeof val === "function"
        ? val.call(this.store, state)
        : state[val];
    };

    res[key].vuex = true;
  });

  return res;
};

export const mapGetters = (states) => {
  const res = {};

  normalizeMap(states).forEach(({ key, val }) => {
    res[key] = function mappedState() {
      const state = this.store.state;
      const getters = this.store.getters;

      const getter =
        typeof val === "function"
          ? val.call(this.store, getters)
          : getters[val];

      return typeof getter === "function"
        ? getter.call(this.store, state)
        : getter;
    };

    res[key].vuex = true;
  });
  return res;
};

export const mapActions = (actions) => {
  const res = {};

  normalizeMap(actions).forEach(({ key, val }) => {
    res[key] = function mappedAction(...args) {
      const state = this.store.state;
      const getters = this.store.getters;
      const actions = this.store.actions;

      const context = { state, getters, actions };

      return actions[val].call(this.store, context, ...args);
    };
  });

  return res;
};

export const setStatePropAccessors = (propName) => ({
  [propName]: {
    get() {
      const state = this.store.state;
      return state[propName];
    },
    set(value) {
      const state = this.store.state;
      state[propName] = value;
    },
  },
});
