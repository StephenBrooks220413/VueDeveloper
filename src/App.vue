<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <router-link class="nav-link" :to="'/'">Home</router-link>
          <router-link class="nav-link" :to="'/Contact'">Contact</router-link>
          <router-link class="nav-link" :to="'/Gallery'">Gallery</router-link>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <HelloWorld/>
    <Posts/>
    <Contact/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Posts, 
    Contact
  }
}
</script>

<style>

</style>
