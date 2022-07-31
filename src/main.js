import { createApp } from 'vue'
import App from './App.vue'
import router from '../routes/router'
import "@/css/tailwind.css"
import "@/css/custom.css"

createApp(App)
.use(router)
.mount('#app')