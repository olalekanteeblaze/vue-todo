import { createApp } from 'vue'
// import Vue from 'vue';
// import Vuex from 'vuex';
import store from './store/store'
import App from './App.vue'

// new Vue({
//     el: '#app',
//     store,
//     render: h => h(App)
// })
// createApp(App).mount('#app')

const app = createApp(App)
app.use(store)
app.mount('#app')