import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/', component: Posts
  },
  {
    path: '/Contact', component: Contact
  },

];

const router = new VueRouter({routes: routes});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
