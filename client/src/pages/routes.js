import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
import Page1 from './Page1.vue';
import Page2 from './Page2.vue';


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2',  component: Page2 }
    
  ],
  linkExactActiveClass: "active"
});