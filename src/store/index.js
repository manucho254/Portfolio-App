import { createStore } from "vuex";

export default createStore({
  state: { activeLink: "home"},
  getters: {
    getActiveLink(state) {
      return state.activeLink;
    },
  },
  mutations: {
    updateActiveLink(state, payload) {
      state.activeLink = payload;
    }
  },
  actions: {},
  modules: {},
});
