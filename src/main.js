import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import moment from 'moment'
import Swal from 'sweetalert2'


Vue.config.productionTip = false

Vue.use(Vuelidate, moment, Swal)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
