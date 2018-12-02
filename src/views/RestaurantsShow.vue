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
              <p> Make a reservation below</p>
              <a v-bind:href="restaurant.reserve_url"> {{ restaurant.reserve_url }}</a>
              <p class="red" v-for="error in errors">{{error}}</p>
              <button v-on:click="addMustVisit()">Mark as a must visit</button>
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
      ratings: [],
      newRating: {must_visit: "yes"},
      errors: []
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/restaurants/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.restaurant = response.data;
    });
  },
  methods: {
    addMustVisit: function() {
      console.log  
        var params = {
        must_visit: this.newRating.must_visit,
        restaurant_id: this.$route.params.id    
      }
      console.log('add as must visit'); 
      this.newRating.must_visit    
    
      axios.post('http://localhost:3000/api/ratings', params).then(function(response) {
        console.log(response.data);
        this.errors = [];
      }.bind(this)).catch(function(errors) {
        console.log('in the .catch function');
        console.log(errors.response);
        this.errors = errors.response.data.errors;
      }.bind(this))
      console.log('add must visit');
    }
  },
  computed: {}
};
</script>