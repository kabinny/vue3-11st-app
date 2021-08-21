import { createApp } from 'vue'
import App from './App'
import fetch from '~/plugins/fetch'

createApp(App)
  .use(fetch)
  .mount('#app')