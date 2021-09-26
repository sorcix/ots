import Vue from 'vue'
import VueI18n from 'vue-i18n'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.scss'

import app from './app.vue'
import messages from './langs/langs.js'
import VueCryptojs from 'vue-cryptojs'

Vue.use(BootstrapVue)
Vue.use(VueI18n)
Vue.use(VueCryptojs)

const cookieSet = Object.fromEntries(document.cookie.split('; ')
  .map(el => el.split('=')
    .map(el => decodeURIComponent(el))))

const i18n = new VueI18n({
  locale: cookieSet.lang?.split(/[_-]/)[0] || navigator?.language?.split(/[_-]/)[0] || 'en',
  fallbackLocale: 'en',
  messages,
})

new Vue({
  el: '#app',
  components: { app },
  data: { version },
  i18n,
  render: createElement => createElement('app'),
})
