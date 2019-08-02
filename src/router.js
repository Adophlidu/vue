
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/home.vue'
import member from './components/member.vue'
import shopcar from './components/shopcar.vue'
import search from './components/search.vue'
import newsList from './components/newsList.vue'
import newsInfo from './components/newsInfo.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        { path: '/', component: home },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/newsList', component: newsList},
        { path: '/home/newsInfo/:id', component: newsInfo }
    ],
    linkActiveClass: 'mui-active'
})

export default router
