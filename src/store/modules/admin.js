import axios from 'axios'
import Swal from 'sweetalert2/src/sweetalert2.js'

const state = {
  users: {},
  test: 'test'
};

const getters = {

};

const actions = {
  loginUser({ commit }, users) {
    axios.post('http://murder-manila/api/logIn', {
      username: users.username,
      password: users.password
    })
    .then(res => {
      commit('LOGIN_USER', users)
      if(res.data.response) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_type', res.data.admin.position_id)
        localStorage.setItem('user_info', res.data.admin.id)
        Swal.fire({
          toast: true,
          position: 'top-end',
          timer: 3000,
          timerProgressBar: true,
          title: res.data.message,
          icon: 'success',
          showConfirmButton: false    
        })
        console.log(res.data)
        // window.location.replace('/owner')
      }
      else {
        Swal.fire({
          toast: true,
          position: 'top-end',
          timer: 3000,
          timerProgressBar: true,
          title: res.data.message,
          icon: 'error',
          showConfirmButton: false     
        })
      }
    })
  },
  logoutUser() {
    localStorage.removeItem('token');

    window.location.replace('/login');
  }
};

const mutations = {
  LOGIN_USER: (state, users) => (state.users = users)
};

export default {
  state,
  getters,
  actions,
  mutations
}