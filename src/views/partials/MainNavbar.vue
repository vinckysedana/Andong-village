<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/img/logo.png" alt="Bootstrap" width="60" height="60">
        Andong Village</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
        </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">The Andong Village</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link mx-2" aria-current="page" to="/"><span >About Us</span> </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link mx-2" aria-current="page" to="/facilities"><span>Facilities</span></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link mx-2" to="/contact"><span>Contact Us</span></router-link>
            </li>
            </ul>
        </div>
      </div>
      </div>
  </nav>
</template>

<script>
export default {
  props: ["activeNavbar"],
};
</script>

