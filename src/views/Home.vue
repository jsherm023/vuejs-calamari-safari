<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="restaurant in restaurants">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: {{ restaurant.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Description: {{ restaurant.description }}</h6>
              <p class="card-text">State Id: {{ restaurant.state_id }}</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
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
      message: "Lets Start Your Safari!",
      restaurants: [],
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/restaurants').then(function(response) {
      console.log(response.data);
      this.restaurants = response.data;
      }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>