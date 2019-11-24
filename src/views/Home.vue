<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="destination.slug">
          <h2>{{destination.name}}</h2>
        </router-link>
        <figure>
          <router-link :to="destination.name">
            <img
              class="image"
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
.image {
  max-width: 200px;
}
.destinations {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
