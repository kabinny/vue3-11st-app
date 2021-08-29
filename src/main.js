import { createApp } from 'vue'
import App from './App'
import fetch from '~/plugins/fetch'
import lazyLoad from '~/plugins/lazyLoad'
import store from '~/store'
import 'animate.css'

createApp(App)
  .use(fetch)
  .use(lazyLoad)
  .use(store)
  .mount('#app')