
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import app from './App.vue'

import { Header, Swipe, SwipeItem, Button, Toast } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

let App = new Vue({
    el: '#app',
    render: c => c(app),
    router
})