<template>
  <div class="main-class">
    <div class="container">
      <div class="title text-center">
        <h2 class="display-3">Contact Us</h2>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="location d-flex align-items-center">
            <h1><img src="../../assets/img/icon/location.svg" alt="" /></h1>
            <div class="detail-location mx-2">
              <li class="list-group-item fw-500">Jl. Raya Andong No. 23</li>
            </div>
          </div>
          <div class="location d-flex align-items-center mt-3">
            <h1><img src="../../assets/img/icon/email1.svg" alt="" /></h1>
            <div class="detail-location mx-2">
              <li class="list-group-item fw-500">andongvillage01@gmail.com</li>
            </div>
          </div>
          <div class="location d-flex align-items-center mt-3">
            <h1><img src="../../assets/img/icon/tlp.svg" alt="" /></h1>
            <div class="detail-location mx-2">
              <li class="list-group-item fw-500">+6281999660040</li>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
            </div>
            <div class="col-md-6 mb-3">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
            </div>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
          </div>
          <button class="btn btn-contact float-end">Send <i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
      <div class="row mb-5">
        <h2 class="display-4">Location</h2>
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20yogasari%20seminya&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavbar from '../partials/MainNavbar.vue';
import Footer from '../partials/FooterView.vue';
export default {
  components: { MainNavbar, Footer },
  data() {
    return {
      activeNavbar: 'contact',
    };
  },
};
</script>
