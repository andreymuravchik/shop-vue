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
          <MainSort v-if="sort" :sort="sort" />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="goods__wrap">
          <MainGoods :goods="filterGoods" v-if="goods" />
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
import axios from "axios";

import MainGoods from "@/components/main/MainGoods.vue";
import MainSort from "@/components/main/MainSort.vue";
import MainCategories from "@/components/main/MainCategories.vue";
import BaseHeader from "@/components/base/BaseHeader.vue";
import GoodsPopup from "@/components/popup/GoodsPopup.vue";

export default {
  name: "HomeView",
  components: { MainGoods, MainSort, MainCategories, BaseHeader, GoodsPopup },
  data() {
    return {
      goods: [],
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
      activeCategory: "",
      isModalOpen: false,
    };
  },
  methods: {
    selectCategory(category) {
      this.activeCategory = category;
      console.log(category);
    },
    openModal() {
      this.isModalOpen = true;
    },
  },
  computed: {
    filterGoods() {
      return this.goods.filter((item) => {
        return item.category === this.activeCategory;
      });
    },
  },
  mounted() {
    axios.get("http://localhost:8080/goods.json").then(({ data }) => {
      this.goods = data.goods;
    });
  },
};
</script>
