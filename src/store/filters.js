export default {
  namespaced: true,
  state: {
    category: null,
    sortBy: {
      type: "popular",
      order: "desc",
    },
  },
  getters: {
    getCategory(state) {
      return state.category;
    },
    getSort(state) {
      return state.sortBy;
    },
  },
  mutations: {
    SET_CATEGORY(state, payload) {
      state.category = payload;
    },
    SET_SORT_BY(state, payload) {
      state.sortBy = payload;
    },
  },
  actions: {
    setCategor({ commit }, payload) {
      commit("SET_CATEGORY", payload);
    },
    setSortBy({ commit }, payload) {
      commit("SET_SORT_BY", payload);
    },
  },
};
