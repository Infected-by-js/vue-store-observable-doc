export function normalizeMap(map) {
  return Array.isArray(map)
    ? map.map((key) => ({ key, val: key }))
    : Object.keys(map).map((key) => ({ key, val: map[key] }));
}

export function boundDispatch(type, payload) {
  const context = {
    dispatch: this.dispatch.bind(this),
    getters: this.getters,
    state:
      typeof this.state === "function" ? this.state.call(this) : this.state,
  };

  return this.actions[type].call(this, context, payload);
}
