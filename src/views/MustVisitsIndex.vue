<template>
  <div class="home">
    <div class="inner-page-hero bg-image" data-image-src="https://www.africansafarihome.com/wp-content/uploads/2017/04/African-Safari-Costs.jpg">
      <div class="container"> 
      </div>
                <!-- end:Container -->
    </div>
    <section class="restaurants-page">
                  <div class="container">
                      <div class="row">
                          <div class="col-xs-12 col-sm-5 col-md-5 col-lg-3">
                              <div class="sidebar clearfix m-b-20">
                                  <div class="main-block">
                                      <div class="sidebar-title white-txt">
                                          <h6>Choose Cusine</h6> <i class="fa fa-cutlery pull-right"></i> </div>
                                      <div class="input-group">
                                          <input type="text" class="form-control search-field" placeholder="Search your favorite food"> <span class="input-group-btn"> 
                                   <button class="btn btn-secondary search-btn" type="button"><i class="fa fa-search"></i></button> 
                                   </span> </div>
                                      <form>
                                          <ul>
                                              <li>
                                                  <label class="custom-control custom-checkbox">
                                                      <input type="checkbox" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Barbecuing and Grilling</span> </label>
                                              </li>
                                              <li>
                                                  <label class="custom-control custom-checkbox">
                                                      <input type="checkbox" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Appetizers</span> </label>
                                              </li>
                                              <li>
                                                  <label class="custom-control custom-checkbox">
                                                      <input type="checkbox" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Soup and salads</span> </label>
                                              </li>
                                              <li>
                                                  <label class="custom-control custom-checkbox">
                                                      <input type="checkbox" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Seafood</span> </label>
                                              </li>
                                              <li>
                                                  <label class="custom-control custom-checkbox">
                                                      <input type="checkbox" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Beverages</span> </label>
                                              </li>
                                          </ul>
                                      </form>
                                      <div class="clearfix"></div>
                                  </div>
                                  <!-- end:Sidebar nav -->
                         
                              </div>
                              <div class="widget clearfix">
                                  <!-- /widget heading -->
                                  <div class="widget-heading">
                                      <h3 class="widget-title text-dark">
                                   Price range
                                </h3>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div class="widget-body">
                                      <div class="range-slider m-b-10"> <span id="ex2CurrentSliderValLabel"> Filter by price:<span id="ex2SliderVal"><strong>35</strong></span>€</span>
                                          <br>
                                          <input id="ex2" type="text" data-slider-min="1" data-slider-max="100" data-slider-step="1" data-slider-value="35" /> </div>
                                  </div>
                              </div>
                              <!-- end:Pricing widget -->
                              <div class="widget clearfix">
                                  <!-- /widget heading -->
                                  <div class="widget-heading">
                                      <h3 class="widget-title text-dark">
                                   Popular tags
                                </h3>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div class="widget-body">
                                      <ul class="tags">
                                          <li> <a href="#" class="tag">
                                      Pizza
                                      </a> </li>
                                          <li> <a href="#" class="tag">
                                      Sendwich
                                      </a> </li>
                                          <li> <a href="#" class="tag">
                                      Sendwich
                                      </a> </li>
                                          <li> <a href="#" class="tag">
                                      Fish 
                                      </a> </li>
                                          <li> <a href="#" class="tag">
                                      Desert
                                      </a> </li>
                                          <li> <a href="#" class="tag">
                                      Salad
                                      </a> </li>
                                      </ul>
                                  </div>
                              </div>
                              <!-- end:Widget -->
                          </div>
                          <div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
                              <div class="bg-gray restaurant-entry"v-for="rating in ratings">
                                  <div class="row">
                                      <div class="col-sm-12 col-md-12 col-lg-8 text-xs-center text-sm-left">
                                          <div class="entry-logo">
                                              <a class="img-fluid" href="#"><img v-bind:src="rating.restaurant.image_url" alt="Food logo"></a>
                                          </div>
                                          <!-- end:Logo -->
                                          <div class="entry-dscr">
                                              <h5><a href="#">{{ rating.restaurant.name }}</a></h5>
                                              <h6><a href="#">{{ rating.restaurant.city}}</a></h6>
                                               <span>{{ rating.restaurant.cuisine }} <a href="#">...</a></span>
                                              <ul class="list-inline">
                                                  <li class="list-inline-item"><i class="fa fa-check"></i> $${{ rating.restaurant.price }}</li>
                                              </ul>
                                          </div>
                                          <!-- end:Entry description -->
                                      </div>
                                      <div class="col-sm-12 col-md-12 col-lg-4 text-xs-center">
                                          <div class="right-content bg-white">
                                              <div class="right-review">
                                                   <a v-bind:href="rating.restaurant.menu_url" class="btn theme-btn-dash">View Menu</a> 
                                                   <a v-on:click="removeMustVisit(rating)" class="btn theme-btn-dash">Remove Must Visit</a> 
                                              </div>
                                          </div>
                                          <!-- end:right info -->
                                      </div>
                                  </div>
                                  <!--end:row -->
                              </div>
                              <!-- end:Restaurant entry -->
                              
                          </div>
                      </div>
                  </div>
    </section>
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
