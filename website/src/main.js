import Vue from 'vue'
import Vuerouter from 'vue-router'
import Header_home from './containers/home/Header.vue'
import Content_home from './containers/home/Content.vue'
import Login from './containers/login/Login.vue'
import Login_header from './containers/login/Login-header.vue'
import Content from './containers/content/Checkin.vue'
import User_Info from './containers/content/User_Info.vue'
import History from './containers/content/History.vue'
import Logout from './containers/Logout.vue'
import Event from './containers/content/Event.vue'
import App from './App.vue'
import { routes } from './routes'
import VueI18n from 'vue-i18n'
import {store} from './store/store.js'
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import { firestorePlugin } from 'vuefire'
import VueCookie from 'vue-cookies'
import NewEvent from './containers/app/NewEvent.vue'
import DatePicker from 'vue2-datepicker';

Vue.use(DatePicker);
Vue.use(VueCookie);
Vue.use(firestorePlugin);
Vue.use(VueSession);
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(Vuerouter);
Vue.component('header-home', Header_home)
Vue.component('new-event', NewEvent)
Vue.component('content-home', Content_home)
Vue.component('login', Login)
Vue.component('checkin', Content)
Vue.component('event', Event)
Vue.component('history', History)
Vue.component('logout', Logout)
Vue.component('Login-header', Login_header)
Vue.component('User-Info', User_Info)

Vue.config.productionTip = false;
// Vue.use(firestorePlugin)
const router = new Vuerouter({
  mode: 'history',
  routes

})

const messages = {
  en: {
    mess : "hello"
  },
  vn: {
    mess :" xc"
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'vn', // set locale
  messages, // set locale messages
})

new Vue({
  el: '#app',
  router,
  i18n, 
 store,
  render: h => h(App)
})
