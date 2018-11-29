<template>
  <div class="home">
    <h1>{{ message }}</h1>
      Search by name: <input v-model="nameFilter">
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="restaurant in filterBy(restaurants, nameFilter, 'name')">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: {{ restaurant.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address: {{ restaurant.address }}</h6>
              <p class="card-text">Phone Number: {{ restaurant.phone }}</p>
              <p class="card-text">City: {{ restaurant.city }}</p>
              <p class="card-text">State: {{ restaurant.state }}</p>
              <p class="card-text">Zip Code: {{ restaurant.postal_code }}</p>
              <img v-bind:src="restaurant.image_url" width="200px"></img>
              <a v-bind:href="'/#/restaurants/' + restaurant.id" class="btn btn-info">View Restaurant</a>
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Lets Start Your Safari!",
      restaurants: [],
      currentRestaurant: {name: ""},
      errors: [],
      nameFilter: ''
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/restaurants').then(function(response) {
      console.log(response.data);
      this.restaurants = response.data;
      }.bind(this))
  },
  methods: {
    },
  
  computed: {}
};
</script>