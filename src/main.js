import { createApp } from 'vue'
import App from './App'
import fetch from '~/plugins/fetch'
import store from '~/store'

createApp(App)
  .use(fetch)
  .use(store)
  .mount('#app')