import Home from './containers/home/Home'
import Login from './containers/login/Login'
import Dangnhap from './containers/login/Login-sms'
import Content from './containers/content/Checkin'
import CheckQr from './containers/checkin/Qr_image.vue'
import NewEvent from './containers/app/NewEvent.vue'
import Qrcode from './containers/app/qrcode.vue'

export const routes = [
  { path: '/', name: 'homepage', component: Home },
  { path: '/login', name: 'loginkaka', component: Login },
  { path: '/checkqr', name: 'checkqr', component: CheckQr },
  { path: '/loginsms', name: 'loginka', component: Dangnhap },
  { path: '/content', name: 'content', component: Content },
  { path: '/newevent', name: 'new', component: NewEvent },
  { path: '/qrcode', name: 'qrcode', component: Qrcode },
]
