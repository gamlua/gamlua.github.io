import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import $ from 'jquery'
import global from './global'
import homePage from './home'
import ourTeam from './pages/our-team'

window.$ = $
window.jQuery = $

jQuery(() => {
  global()
  homePage()
  ourTeam()
})
