import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/pages/AboutView.vue'
import Facilitate from '../views/pages/FacilitateView.vue'
import Review from '../views/pages/ReviewView.vue'
import Contact from '../views/pages/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'about',
        component: About
    },
    {
        path: '/facilities',
        name: 'facilities',
        component: Facilitate
    },
    {
        path: '/review',
        name: 'review',
        component: Review
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router