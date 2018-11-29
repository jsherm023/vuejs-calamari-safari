import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import RestaurantsShow from './views/RestaurantsShow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    { path: "/signup", 
    name: "signup", 
    component: Signup },

    { path: "/login", 
    name: "login", 
    component: Login },

    { path: "/logout", 
    name: "logout", 
    component: Logout },

    { path: "/restaurants/:id", 
    name: "restaurantsShow", 
    component: RestaurantsShow 
  },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
