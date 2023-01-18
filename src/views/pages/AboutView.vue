


<template>
  <div class="main-class">
    <!-- Jumbotron -->
    <section id="jumbotron" style="margin-top: -100px; position: relative" class="about-slider">
      <div class="welcome">
        Selamat Datang di Andong Village <br />
        <button class="btn btn-green p-3">
          <a class="nav-link" aria-current="page" @click="moveToVirtual"
            >Mulai Virtual Tour <i class="ml-2 fas fa-play-circle"></i>
          </a>
        </button>
      </div>

      <Slider />
    </section>
    <!-- End Jumbotron -->

    <!-- Summary Content -->
    <div class="container my-5">
      <div class="description-content">
        <div class="row">
          <div class="col-12 col-md-4">
            <img
              src="../../assets/img/view/1.JPG"
              class="img-fluid"
              alt=""
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 12px;
              "
            />
          </div>
          <div class="col-12 col-md-8">
            <h1 class="display-4 text-orange">Andong Village</h1>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              laborum qui, dolorem ullam voluptatum delectus blanditiis ea illo
              accusantium. Repellendus consequatur fuga laudantium quaerat
              numquam excepturi! Totam eum blanditiis perspiciatis. Excepturi
              esse blanditiis, accusantium repudiandae, enim, ipsum ex cumque
              magni at quas possimus. Voluptate quidem rerum eveniet, tempore
              reprehenderit dignissimos maiores repudiandae fuga voluptatem eos
              at dolorem labore voluptatibus consectetur! Quisquam aut labore
              nihil, at nobis ea explicabo quaerat accusantium error, debitis
              iste tempore quos molestias? Quis modi hic vitae ea. Illo, dolore
              sunt reiciendis iste provident libero! Ipsa, incidunt? Iusto
              repudiandae fugiat minima in! Expedita dolor corrupti eaque?
              Fugiat corrupti alias error dolores quae deleniti nam eos
              voluptatem esse. Labore praesentium voluptatum illum tempore
              eveniet tenetur inventore accusantium qui?
            </p>
            <div class="more-info d-flex align-items-center">
              <span class="text-orange"
                >More Info About The Andong Village</span
              >
              <div
                class="arrow-icon mx-2"
                style="
                  height: 50px;
                  position: relative;
                  background: #606C38;;
                  width: 50px;
                  border-radius: 50%;
                "
              >
                <router-link
                  to="/facilities"
                  style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "
                  ><i
                    class="text-white bi bi-arrow-right" style="-webkit-text-stroke: 2px white  ;"
                  ></i
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Summary Content -->
  </div>
</template>

<script>
import MainNavbar from "../partials/MainNavbar.vue";
import Footer from "../partials/FooterView.vue";
import Slider from "../components/Slider.vue";

export default {
  components: { MainNavbar, Footer, Slider },
  data() {
    return {
      activeNavbar: "about",
    };
  },
  methods:{
    moveToVirtual(){
      window.location = "http://127.0.0.1:5173/virtual.htm"
    }
  }
};
</script>

<style>
</style>