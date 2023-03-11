import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './index.css'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios)
    .mount('#app')
