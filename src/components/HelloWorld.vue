<template>
  <div class="hello">
   
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner homeBg">
        <div class="carousel-item active">
          <h1>Layouts Include Vue <br> with Bootstrap</h1>
          <h3>
            Including the css and javascript needed, <br>
            and maintain the lightweight it's known for.
          </h3>
        </div>
        <div class="carousel-item">
          <h1>Available Templates for Sale</h1>
          <h3>
            All built with css, javascript, html, <br>
            and also with a choice of React or Vue.
          </h3>
        </div>
        <div class="carousel-item">
          <h1>Hosting and secure form <br> handling as well</h1>
          <h3>
            Current clients being served are in gallery, <br>
            please contact me for additional information.
          </h3>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <br><br><br><br>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-6">
          <img src="../assets/logo.png" width="50%" alt="vue"> 
          <!-- <img src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png" width="50%" alt=""> -->
        </div>
        <div class="col-md-6">
          <br> <br> <br> <br>
          <h3>Author: Stephen Brooks</h3>
          <p>
            <strong>Education</strong>: A.S. Computer Science from SNHU <br>
                       Udemy Courses and TrueCoders Bootcamp <br>
            <strong>Experience</strong>: Freelance Front End Developer <br>
            <strong>Website</strong>: <a href="https://www.clear-web-designs.com" target="_blank">https://www.clear-web-designs.com</a>
          </p>
        </div>
      </div>
    </div>
    <br><br><br><br>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4">
          <br>
          <h3>Content</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum iste in sequi accusantium adipisci, possimus eos.
        </div>
        <div class="col-md-4">
          <br>
          <h3>Forms</h3>
          Praesentium facilis blanditiis ratione nesciunt 
          exercitationem provident laborum, omnis beatae asperiores.
        </div>
        <div class="col-md-4">
          <br>
          <h3>Styling</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum iste in sequi accusantium adipisci, possimus eos.
        </div>
      </div>
    </div>
    <br> <br> <br>
    <div class="jumbotron text-center">
      <article>
        <h1>Made For the Reason</h1>
        <section>
          Make code build for you and just maintain the logic
        </section>
      </article>
    </div>
    <br><br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <center>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary btn1">Go somewhere</a>
              </div>
            </div>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary btn1">Go somewhere</a>
              </div>
            </div>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary btn1">Go somewhere</a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  @import "../assets/bootstrap.min.css";

.homeBg {
  background: url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 80vh;
  padding-top: 10%;
  padding-left: 10%;
  color: red;
}
.homeBg h1 {
  color: red;
}
.homeBg h3 {
  color: red;
}

.btn1:hover{
  transition-delay: 0.2s;
  background-color: white;
  color: black;
}

.btn2:hover{
  transition-delay: 0.2s;
  background-color: white;
  color: black;
}

.btn3:hover{
  transition-delay: 0.2s;
  background-color: white;
  color: black;
}


</style>
