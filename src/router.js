
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/home.vue'
import member from './components/member.vue'
import shopcar from './components/shopcar.vue'
import search from './components/search.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/shopcar', component: shopcar},
        {path: '/search', component: search},
    ],
    linkActiveClass: 'mui-active'
})

export default router
