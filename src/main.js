import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store.js'
import i18n from './i18n'
import router from './router'
import './index.css'
import './assets/tailwind.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
// library.add(faPhone)
const app = createApp(App).use(i18n)
app.use(router)
app.use(store)
app.mount('#app')

// import { createApp } from "vue";
// import App from "./App.vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faPhone);

// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
