<template>
    <div id="app">
  <div class="site-wrapper animsition" data-animsition-in="fade-in" data-animsition-out="fade-out">
    <header id="header" class="header-scroll top-header headrom">
        <!-- .navbar -->
        <nav class="navbar navbar-dark">
            <div class="container">
                <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                <a class="navbar-brand" href="index.html"> <img class="img-rounded" src="images/food-picky-logo.png" alt=""> </a>
                <div class="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"> <a class="nav-link active" href="#/">Home <span class="sr-only">(current)</span></a> </li>
                          <li class="nav-item"> <a class="nav-link active" href="/#/ratings">Must Visits <span class="sr-only">(current)</span></a> </li>
                            <li class="nav-item"> <a class="nav-link active" href="/#/restaurants">Search Restaurants <span class="sr-only">(current)</span></a> </li>
                        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
                            <div class="dropdown-menu"> <a class="dropdown-item" href="/#/signup">Signup</a> <a class="dropdown-item" href="/#/login">Login</a> <a class="dropdown-item" href="/#/logout">Logout</a> 
                               
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- /.navbar -->
    </header>
        
        <router-view/>
        
        <footer class="footer">
            <div class="container">
                <!-- top footer statrs -->
                <div class="row top-footer">
                    <div class="col-xs-12 col-sm-3 footer-logo-block color-black">
                        <a href="#"> <img src="https://t4.ftcdn.net/jpg/01/23/88/89/240_F_123888953_gYo6tlCP7OjNRYIN1WbbmHUkaDE9oxyK.jpg" alt="Footer logo"> </a>  </div>
                        <div class="col-xs-12 col-sm-2 how-it-works-links color-black">
                            <h6>How it Works</h6>
                            <ul>
                                <li><a href="#/">Enter your location</a> </li>
                                <li><a href="/#/restaurants">Choose restaurant</a> </li>
                                <li><a href="/#/ratings">Mark as must visit</a> </li>
                            </ul>
                        </div>
                    </div>
                    <!-- top footer ends -->
                    <!-- bottom footer statrs -->
                    <div class="bottom-footer">
                        <div class="row">


                        </div>
                    </div>
                    <!-- bottom footer ends -->
                </div>
        </footer>
    </div>
    </div>
    </template>

    <style>
</style>
