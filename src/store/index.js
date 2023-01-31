import { createStore } from "vuex";
import goods from "./goods";
import user from "./user";
import filters from "./filters";

export default createStore({
  modules: { goods, user, filters },
});
