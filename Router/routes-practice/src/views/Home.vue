<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
    <!-- using a v-for directive to loop through all of m y destinations in store.js -->
    <!-- Every time i use the V-for directive, i have to use a :key attribute to know which element is which -->
    <div v-for="destination in destinations" :key="destination.name">
      <router-link :to="destination.slug">
        <h2>{{ destination.name }}</h2>
      </router-link> 
      <figure>
      <router-link  :to="destination.name">
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
      </router-link>
      </figure>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "home",
  components: {},
  data(){
    return{
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
.destinations {
  display: flex;
  border: 10px;
  padding: 5px;
  flex-wrap: wrap;
}
</style>
