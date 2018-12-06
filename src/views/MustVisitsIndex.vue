<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="rating in ratings">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: {{ rating.restaurant.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address: {{ rating.restaurant.address }}</h6>
              <p class="card-text">Phone Number: {{ rating.restaurant.phone }}</p>
              <p class="card-text">City: {{ rating.restaurant.city }}</p>
              <p class="card-text">State: {{ rating.restaurant.state }}</p>
              <p class="card-text">Zip Code: {{ rating.restaurant.postal_code }}</p>
              <p class="card-text">Price: {{ rating.restaurant.price }}</p>
              <p class="card-text">Must Visit: {{ rating.must_visit }}</p>
              <img v-bind:src="rating.restaurant.image_url" width="200px"></img>
              <button v-on:click="removeMustVisit(rating)">Remove must visit</button>
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
      message: "Here Are Your Must Visits!",
      ratings: [],
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/ratings').then(function(response) {
      console.log(response.data);
      this.ratings = response.data;
    }.bind(this))   
  },
  methods: {
    removeMustVisit: function(inputmustvisit) {
      console.log('removing must visit');
      console.log(inputmustvisit);
      var index = this.ratings.indexOf(inputmustvisit);
      this.ratings.splice(index, 1);
    
      axios.patch('http://localhost:3000/api/ratings/' + inputmustvisit.id).then(response =>{
        console.log(response.data);
        this.rating = response.data;
      });
    }
  },
  computed: {}
};
</script>
