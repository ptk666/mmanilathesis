import axios from 'axios';

const state = {
  imgs: [
    {src: 'murder4.png'},
    {src: 'revenge.jpg'}
  ],
  themes: [],
  bookingDatas: [],
  contactsDatas: [],
  receiptComputations: {
    constPlayer: 8000,
    perHead: 500,
    vat: 0.12,
    totalPlayers: 0,
    totalAmount: 0,
    totalVAT: 0,
    totalAmountWithVAT: 0,
    downpayment: 0
  },
  snackbars: {
    show: false,
    text: ''
  }
};

const getters = {
  showImgs: (state) => state.imgs,
  showThemes: (state) => state.themes,
  showBookingDatas: (state) => state.bookingDatas,
  showContactsDatas: (state) => state.contactsDatas
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchThemes({ commit }) {
    const response = await axios.get('http://murder-manila/api/themes')
      commit('setThemes', response.data.data)   
  },
  async storeData({ commit }, sendData) {
    commit('addData', sendData) 
  },
  async storeContactsData({ commit }, contactsData) {
    commit('addContactsData', contactsData)
  },
  async getVerificationCode({ commit }) {
    const response = await axios.get('http://murder-manila/api/sendVerification/')
      commit(response)
  },
  async getVerifyCode({ commit }) {
    const response = await axios.get('http://murder-manila/api/booking')
      commit(response)
  },
  async computation({ commit }) {
    state.receiptComputations.totalPlayers = state.bookingDatas[0].maxpax - 8;
    state.receiptComputations.totalAmount = (state.receiptComputations.totalPlayers * state.receiptComputations.perHead) + state.receiptComputations.constPlayer;
    state.receiptComputations.totalVAT = state.receiptComputations.totalAmount * state.receiptComputations.vat;
    state.receiptComputations.totalAmountWithVAT = (state.receiptComputations.totalAmount + state.receiptComputations.totalVAT);
    state.receiptComputations.downpayment = (state.receiptComputations.totalAmountWithVAT / 2);
    await commit('totalAmount', state.receiptComputations.downpayment)
  },
  async setSnackbar({commit}, snackbars) {
    await commit('snackbarSet', snackbars);
  }
}

const mutations = {
  setThemes: (state, themes) => (state.themes = themes),
  addData: (state, bookingDatas) => state.bookingDatas.push(bookingDatas),
  addContactsData: (state, contactsDatas) => state.contactsDatas.push(contactsDatas),
  totalAmount: (state, payment) => (state.receiptComputations.downpayment = payment),
  snackbarSet: (state, snackbars) => (state.snackbars = snackbars)
};

export default {
  state,
  getters,
  actions,
  mutations
}