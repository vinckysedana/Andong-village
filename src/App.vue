<script setup>
import MainNavbar from './views/partials/MainNavbar.vue'
import Footer from './views/partials/FooterView.vue'
</script>

<template>
  <MainNavbar/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer/>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s ease-out;
}


</style>
