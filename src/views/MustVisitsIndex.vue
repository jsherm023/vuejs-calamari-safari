<template>
  <div class="home">
    <div class="inner-page-hero bg-image" data-image-src="https://png.pngtree.com/thumb_back/fw800/back_pic/05/06/60/94596f0ca767149.jpg">
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
                  <input v-model="nameFilter" list="names" placeholder="Search your favorite food">
                  <datalist id="names"> 
                    <span v-for="rating in ratings"> 
                      <option>{{ rating.restaurant.city }}</option>
                      <option>{{ rating.restaurant.postal_code }}</option>
                      <option>{{ rating.restaurant.name }}</option>
                      <option>{{ rating.restaurant.cuisine }}</option>
                      <button class="btn btn-secondary search-btn" type="button"><i class="fa fa-search"></i></button> 
                    </span>
                  </datalist>

                </div>
                   <form>
                  <ul>
                    <li>
                      <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" @click="setCuisine('italian')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Italian</span> </label>
                      </li>
                      <li>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" @click="setCuisine('American')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">American</span> </label>
                        </li>
                        <li>
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" @click="setCuisine('Asian')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Asian</span> </label>
                          </li>
                          <li>
                            <label class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" @click="setCuisine('Mexican')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Mexican</span> </label>
                            </li>
                            <li>
                              <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" @click="setCuisine('Seafood')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Seafood</span> </label>
                              </li>
                               <li>
                              <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" @click="setCuisine('Pizza')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Pizza</span> </label>
                              </li>
                               <li>
                              <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" @click="setCuisine('Mediterranean')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Mediterranean</span> </label>
                              </li>
                               <li>
                              <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" @click="setCuisine('Cafe')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Cafe</span> </label>
                              </li>
                               <li>
                              <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" @click="setCuisine('Southern')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Southern</span> </label>
                              </li>
                               <li>
                              <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" @click="setCuisine('Bakery')"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Bakery</span> </label>
                              </li>
                            </ul>
                          </form>
                            <div class="clearfix"></div>
                          </div>
                          <!-- end:Sidebar nav -->
                          
                        </div>
                        
                        
                    </div>
                    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
                      <div class="bg-gray restaurant-entry"v-for="rating in orderBy(filterBy(ratings, nameFilter), sortAttribute, sortAscending)">
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
                                <a v-bind:href="rating.restaurant.url" class="btn btn-success">View on Zomato</a> 
                                <div>
                                  <a v-bind:href="rating.restaurant.menu_url" class="btn btn-info">View Menu</a> 
                                </div>
                                  
                                 <a v-on:click="removeMustVisit(rating)" class="btn btn-danger">Remove Must Visit</a> 
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
              message: "Here Are Your Must Visits!",
              ratings: [],
              nameFilter: this.$route.query.name,
              sortAttribute: 'name', 
              sortAscending: 1

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
            },
            setCuisine: function(inputCuisine) {
              console.log('run setCuisine function');
              if (this.nameFilter === inputCuisine) {
                this.nameFilter = "";
              } else {
              this.nameFilter = inputCuisine;
              }
            }
          },
          computed: {}
        };
      </script>
