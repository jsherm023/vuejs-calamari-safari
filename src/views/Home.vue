<template>
  <div class="home">
    <h1>{{ message }}</h1>
      Search Your Destination: <input v-model="nameFilter" list="names">
      <datalist id="names">
        <span v-for="restaurant in restaurants">
          <option>{{ restaurant.city }}</option>
          <option>{{ restaurant.state }}</option>
          <option>{{ restaurant.postal_code }}</option>
          <option>{{ restaurant.name }}</option>
          <option>{{ restaurant.cuisine }}</option>
        </span>
      </datalist>
      <div>
        <button @click="setSortAttribute('city')">Sort by city</button>
        <button @click="setSortAttribute('state')">Sort by state</button>
        <button @click="setSortAttribute('price')">Sort by price</button>
      </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="restaurant in orderBy(filterBy(restaurants, nameFilter), sortAttribute, sortAscending)">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: {{ restaurant.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address: {{ restaurant.address }}</h6>
              <p class="card-title">Cuisine: {{ restaurant.cuisine }}</p>
              <p class="card-text">Area: {{ restaurant.area }}</p>
              <p class="card-text">City: {{ restaurant.city }}</p>
              <p class="card-text">Zip Code: {{ restaurant.postal_code }}</p>
              <p class="card-text">Price: {{ restaurant.price }}</p>
              <img v-bind:src="restaurant.image_url" width="200px"></img>
              <div>
                <a v-bind:href="'/#/restaurants/' + restaurant.id" class="btn btn-info btn-sm">View Restaurant</a>
              </div>
              <div>
                <a v-bind:href="restaurant.url" class="btn btn-info btn-sm">View on Zomato</a>
              </div>
              <a v-bind:href="restaurant.menu_url" class="btn btn-info btn-sm">View Menu</a>
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
      nameFilter: '',
      sortAttribute: 'name', 
      sortAscending: 1
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/restaurants').then(function(response) {
      console.log(response.data);
      this.restaurants = response.data;
      }.bind(this))
  },
  methods: {
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        this.sortAscending *= -1;
      } else {
      this.sortAttribute = inputAttribute;
      }
    }
  },
  
  computed: {}
};
</script>