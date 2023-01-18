<template>
  <div class="main-class">
    <div class="container">
      <div class="title text-center">
        <h2 class="display-3">Facilities</h2>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" id="btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display: none">Launch demo modal</button>

      <!-- Modal -->
      <div class="modal fade w-100 h-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div
          class="modal-dialog"
          style="padding: 0;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); height:80% max-width:100% !important; "
        >
          <div class="modal-content" style="height: 100%; border-radius: 12px">
            <img src="src/assets/img/view/2.JPG" alt="" style="border-radius: 12px" id="image-modal" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center image">
        <div class="col-md-2 bg-grey mx-1 mb-2 text-center align-items-center p-3">
          <h1><i class="fas fa-bath text-orange"></i></h1>
          <h6 class="fw-bold">Room</h6>
        </div>
        <div class="col-md-2 bg-grey mx-1 mb-2 text-center align-items-center p-3">
          <h1><i class="fas fa-bed text-orange"></i></h1>
          <h6 class="fw-bold">Room</h6>
        </div>
        <div class="col-md-2 bg-grey mx-1 mb-2 text-center align-items-center p-3">
          <h1><i class="fas fa-swimming-pool text-orange"></i></h1>
          <h6 class="fw-bold">Swimming Pool</h6>
        </div>
        <div class="col-md-2 bg-grey mx-1 mb-2 text-center align-items-center p-3">
          <h1><i class="fas fa-wifi text-orange"></i></h1>
          <h6 class="fw-bold">Wifi</h6>
        </div>
      </div>

      <!-- Picture -->
      <div class="picture mt-4">
        <h2 class="display-4">Picture</h2>
        <div class="row pl-1">
          <!-- Slide Picture -->
          <div class="slide-picture my-5">
            <swiper
              :loop="true"
              :loopFillGroupWithBlank="true"
              :pagination="{
                clickable: true,
              }"
              :navigation="true"
              :modules="modules"
              :breakpoints="swiperOptions.breakpoints"
              class="mySwiper"
            >
              <swiper-slide v-for="(image, index) in images" v-bind:key="index">
                <div class="card mx-auto position-relative" style="width: 18rem">
                  <img :src="'../../src/assets/img/view/' + image.url" alt="" class="img-fluid" style="border-radius: 10px" :data-image="image.url" v-on:-click="zoom" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="video my-5">
            <h2 class="display-4">Video</h2>
            <video-player :options="videoOptions" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavbar from '../partials/MainNavbar.vue';
import Footer from '../partials/FooterView.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';
import VideoPlayer from '../components/VideoPlayer.vue';
export default {
  components: { MainNavbar, Footer, Swiper, SwiperSlide, VideoPlayer },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
        },
      },
      images: [
        {
          url: '1.JPG',
          name: 'Judul Foto',
        },
        {
          url: '2.JPG',
          name: 'Judul Foto',
        },
        {
          url: '3.JPG',
          name: 'Judul Foto',
        },
        {
          url: '4.JPG',
          name: 'Judul Foto',
        },
        {
          url: '5.JPG',
          name: 'Judul Foto',
        },
        {
          url: '6.JPG',
          name: 'Judul Foto',
        },
        {
          url: '7.JPG',
          name: 'Judul Foto',
        },
      ],
      temp: [],
      counter: 0,
      show: 'Show More',
      icon: 'fas fa-caret-square-down',
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: '/src/assets/video/Andong Village.mp4',
            type: 'video/mp4',
          },
        ],
      },
    };
  },
  mounted() {
    let indie = this.images.slice(0, 6);
    this.temp = this.images;
    this.images = indie;
  },
  methods: {
    showmore() {
      if (this.counter % 2 == 0) {
        this.images = this.temp;
        (this.icon = 'fas fa-caret-square-down'), (this.show = 'Show More');
      } else {
        let indie = this.images.slice(0, 6);
        this.images = indie;
        (this.icon = 'fas fa-caret-square-up'), (this.show = 'Less More');
      }
      this.counter++;
    },
    zoom: function (el) {
      let imageModal = el.currentTarget.dataset['image'];
      let url = 'src/assets/img/view/' + imageModal;
      console.log(url);
      $('#btn-modal').click();
      $('#image-modal')[0].src = 'src/assets/img/view/' + imageModal;
    },
  },
};
</script>
