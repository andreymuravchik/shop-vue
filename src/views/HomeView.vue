<template>
  <div class="wrapper">
    <BaseHeader />
    <div class="content">
      <div class="container">
        <div class="options">
          <MainCategories
            v-if="catesories"
            :catesories="catesories"
            @selectCategory="selectCategory"
          />
          <MainSort
            @onClickSortType="onClickSortType"
            v-if="sort"
            :sort="sort"
          />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div v-if="loaded" class="goods__wrap">
          <MainGoods :goods="goods" v-if="goods" />
        </div>
        <div v-else class="goods__wrap">
          <BaseLoader />
        </div>

        <button type="button" class="btn btn-primary" @click="openModal">
          Подробнее
        </button>

        <GoodsPopup
          v-if="isModalOpen"
          title="Пользовательское соглашение"
          @close="isModalOpen = false"
        >
          <template v-slot:ex>rrrrrr</template>
        </GoodsPopup>
      </div>
    </div>
  </div>
</template>

<script>
import MainGoods from "@/components/main/MainGoods.vue";
import MainSort from "@/components/main/MainSort.vue";
import MainCategories from "@/components/main/MainCategories.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import GoodsPopup from "@/components/popup/GoodsPopup.vue";
import BaseLoader from "../components/base/BaseLoader.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    MainGoods,
    MainSort,
    MainCategories,
    BaseHeader,
    GoodsPopup,
    BaseLoader,
  },
  data() {
    return {
      sort: [
        { name: "популярности", type: "popular", order: "desc" },
        { name: "цене", type: "price", order: "desc" },
        { name: "алфавиту", type: "name", order: "asc" },
      ],
      catesories: [
        { id: 0, name: "Бумага" },
        { id: 1, name: "Скотч" },
        { id: 2, name: "Ручки" },
        { id: 3, name: "Дневники" },
        { id: 4, name: "Другое" },
      ],
      isModalOpen: false,
    };
  },
  methods: {
    selectCategory(category) {
      this.setCategor(category);
      this.load(category);
    },
    onClickSortType(sortObj) {
      this.setSortBy(sortObj);
      // this.load(sortObj);
    },
    openModal() {
      this.isModalOpen = true;
    },
    ...mapActions({
      load: "goods/loadGoods",
      setCategor: "filters/setCategor",
      setSortBy: "filters/setSortBy",
    }),
  },
  computed: {
    ...mapGetters({
      getGoods: "goods/getGoods",
      getLoaded: "goods/getLoaded",
      getCategory: "filters/getCategory",
      getSort: "filters/getSort",
    }),
    goods() {
      return this.getGoods;
    },
    loaded() {
      return this.getLoaded;
    },
  },

  mounted() {
    this.load(null);
  },
  updated() {},
};
</script>
