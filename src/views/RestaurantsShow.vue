<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: {{ restaurant.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address: {{ restaurant.address }}</h6>
              <p class="card-text">City: {{ restaurant.city }}</p>
              <p class="card-text">State: {{ restaurant.state }}</p>
              <img v-bind:src="restaurant.image_url" width="200px">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Check out this restaurant!",
      restaurant: {},
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/restaurants/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.restaurant = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>