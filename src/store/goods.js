import axios from "axios";

export default {
  namespaced: true,
  state: {
    goods: [],
    isLoaded: false,
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getLoaded(state) {
      return state.isLoaded;
    },
  },
  mutations: {
    SET_GOODS(state, payload) {
      state.isLoaded = true;
      state.goods = payload;
    },
    SET_LOADED(state, payload) {
      state.isLoaded = payload;
    },
  },
  actions: {
    loadGoods({ commit, dispatch }, category) {
      dispatch("SET_LOADED", false);
      return axios
        .get(
          `http://localhost:3000/goods?${
            category !== null ? `category=${category}` : ""
          }`
          // `http://localhost:3000/goods?_sort=${category.type}&_order=${category.order}`
        )
        .then(({ data }) => {
          commit("SET_GOODS", data);
        });
    },
  },
};
