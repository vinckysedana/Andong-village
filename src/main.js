import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "video.js/dist/video-js.css"

import "./assets/css/custom.css"

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"