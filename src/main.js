import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store.js'
import i18n from './i18n'
import router from './router'
import './index.css'
import './assets/tailwind.css'

const app = createApp(App).use(i18n)
app.use(router)
app.use(store)
app.mount('#app')
