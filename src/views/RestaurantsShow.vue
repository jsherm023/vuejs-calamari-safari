<template>
  <div class="home">
    <section class="inner-page-hero bg-image" data-image-src="https://choolaah.com/wp-content/uploads/2018/05/our-food-banner.jpg">
                <div class="profile">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12  col-md-4 col-lg-4 profile-img">
                                <div class="image-wrap">
                                    <figure><img v-bind:src=" restaurant.image_url" alt="Profile Image"></figure>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 profile-desc">
                                <div class="pull-left right-text white-txt">
                                    <h6><a href="#">{{ restaurant.name }}</a></h6> <a class="btn btn-small btn-green" v-on:click="addMustVisit()">Mark as Must Visit</a>
                                    <p>{{ restaurant.cuisine }}</p>
                                    <ul class="nav nav-inline">
                                        <li class="nav-item"> <a class="nav-link active" href="#"><i class="fa fa-check"></i>$${{ restaurant.price }}</a> </li>
                                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa fa-motorcycle"></i> 30 min</a> </li>
                                        <li class="nav-item ratings">
                                            <a class="nav-link" href="#"> <span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    </span> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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