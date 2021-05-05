<template>
  <div class="container-fluid">
    <div class="container">
      <h1 class="main__heading">Статьи</h1>
      <div class="items__list">
        <article
          class="items__list__item"
          v-for="item in $store.state.items.items"
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
export default {
  mounted: function () {
    console.log("start");
    this.$store.commit("items/get");
  },
};
</script>
