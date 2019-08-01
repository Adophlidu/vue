import Vue from 'vue'
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'

import app from './App.vue'

Vue.component(Header.name, Header)

let App = new Vue({
    el: '#app',
    render: c => c(app)
})