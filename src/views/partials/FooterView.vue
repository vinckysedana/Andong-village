<template>
  <footer class="footer separate-dashed">
    <div class="container mt-5 pb-5">
      <div class="row">
        <div class="col-md-3 text-center mb-3">
          <img src="../../assets/img/logo.png" alt="" class="img-fluid float-center text-center" width="200" />
        </div>
        <div class="col-md-6 footer-contact">
          <h2 class="text-orange text-uppercase mb-4 fw-bold" style="">Contact</h2>
          <div class="whatsapp d-flex mb-2 align-items-center">
            <div class="icon-whatsapp">
              <img src="../../assets/img/icon/wa.svg" alt="" />
            </div>
            <div class="detail-whatsapp mx-2">
              <li class="list-group-item fw-500">+6281999660040</li>
            </div>
          </div>
          <div class="email d-flex align-items-center mt-4">
            <div class="icon-email">
              <img src="../../assets/img/icon/email.svg" alt="" />
            </div>
            <div class="detail-email mx-2">
              <li class="list-group-item fw-500">andongvillage01@gmail.com</li>
            </div>
          </div>
        </div>
        <div class="col-md-3 footer-feature">
          <ul class="list-group list-group-flush">
            <div class="" v-for="(feature, index) in features" v-bind:key="index">
              <router-link :to="feature.link" class="decoration-none"
                ><li class="list-group-item text-orange px-0">{{ feature.name }}</li></router-link
              >
            </div>
          </ul>
        </div>
      </div>
      <div class="row d-flex justify-content-end">
        <div class="col-md-3 social-media px-0">
          <a href="https://www.instagram.com/vinckysdna/"
            ><span class="text-orange mx-2" style="font-size: 3em"><img src="../../assets/img/icon/ig.svg" alt="" /></span
          ></a>
          <a href="https://www.youtube.com/channel/UCPvimy8JEkeOXkHOLCjT-cg/videos?view=0&sort=da"
            ><span class="text-orange mx-2" style="font-size: 3em"><img src="../../assets/img/icon/yt.svg" alt="" /></span
          ></a>
        </div>
      </div>
      <div class="row d-flex justify-content-center text-orange text-center">
        <div class="col-md-6">&copy; Copyright {{ getDate }} {{ author }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      author: 'Kadek Vincky Sedana',
      features: [
        {
          name: 'About Us',
          link: '/',
        },
        {
          name: 'Facilities',
          link: '/facilities',
        },
        {
          name: 'Contact Us',
          link: '/contact',
        },
      ],
    };
  },
  computed: {
    getDate() {
      const d = new Date();
      const day = d.getFullYear();

      return day;
    },
  },
};
</script>
