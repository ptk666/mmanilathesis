import axios from 'axios'
import Swal from 'sweetalert2/src/sweetalert2.js'

const state = {
  users: {},
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
        localStorage.setItem('user_info', res.data.admin.username)
        Swal.fire({
          toast: true,
          position: 'top-end',
          timer: 3000,
          timerProgressBar: true,
          title: res.data.message,
          icon: 'success',
          showConfirmButton: false    
        })
        let currentUser = localStorage.getItem('user_type');
        if(currentUser == 1) {
          window.location.replace('/owner')
        }
        else if(currentUser == 2) {
          window.location.replace('/eventManager')
        }
        else if(currentUser == 3) {
          window.location.replace('/operationSupervisor')
        }
        
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
  },
};

const mutations = {
  LOGIN_USER: (state, users) => (state.users = users),
  SAVE_POSITIONS: (state, positions) => (state.positions = positions)
};

export default {
  state,
  getters,
  actions,
  mutations
}