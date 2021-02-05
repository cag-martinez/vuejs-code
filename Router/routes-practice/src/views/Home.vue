<template>
  <div class="home">
    <!-- using a v-for directive to loop through all of m y destinations in store.js -->
    <!-- Every time i use the V-for directive, i have to use a :key attribute to know which element is which -->
    <div v-for="destination in destinations" :key="destination.name">
      <router-link :to="destination.slug">
        <h2>{{ destination.name }}</h2>
      </router-link>

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
