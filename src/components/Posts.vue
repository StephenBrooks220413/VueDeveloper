<template>

<div class="container containerPost" :style="{color: 'white'}">
  <h1 class="text-center">Content</h1>
  <br><br><br>
  <div class="container">
    <div class="row text-center">
      <br><br>
      <div class="col-md-3">
        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="90%" alt="project">
      </div>
      <br><br>
      <div class="col-md-3">
        <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="90%" alt="project">
      </div>
      <br><br>
      <div class="col-md-3">
        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="90%" alt="project">
      </div>
      <br><br>
      <div class="col-md-3">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" width="90%" alt="project">
      </div>
    </div>
  </div>
  <!-- <table class="table table-striped table-dark mt-4">
    <thead>
      <tr>
        <th scope="col">User Id</th>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
      <td>{{post.userid}}</td>
        <td>{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
      </tr>
    </tbody>
  </table> -->
  <br><br><br><br><br><br>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Posts',
    data(){
        return {
            posts: []
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(posts =>{
            this.posts = posts.data
        });
    }
}

</script>

<style>

/* .containerPost {
  height: 50vh!important;
  margin-bottom: 80px;
} */

</style>