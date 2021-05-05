<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="main__heading">Статьи</h1>
      <div class="items__list">
        <article
          class="items__list__item"
          v-for="item in AllItems"
          :key="item.id"
        >
          <h2 class="article__heading">{{ item.name }}</h2>
          <p class="article__body">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters("items", ["AllItems"]),
  methods: mapActions("items",["fetchItems"]),
  async mounted() {
    this.fetchItems()
  },
};
</script>
