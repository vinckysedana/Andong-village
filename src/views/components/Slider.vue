<template>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  style="">
    <swiper-slide>
        <div class="backlight"></div>
        <img src="../../assets/img/view/1.JPG" alt="" style="height:600px; object-fit: cover; width: 100%;">
    </swiper-slide>
    <swiper-slide>
        <div class="backlight"></div>
        <img src="../../assets/img/view/2.JPG" alt="" style="height:600px; object-fit: cover; width: 100%;">
    </swiper-slide>
    <swiper-slide>
        <div class="backlight"></div>
        <img src="../../assets/img/view/3.JPG" alt="" style="height:600px; object-fit: cover; width: 100%;">
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>