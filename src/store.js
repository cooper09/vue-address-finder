import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataURL:'https://sleepy-everglades-99189.herokuapp.com/multiline_facebook_conversions',
    contactsURL: "https://sleepy-everglades-99189.herokuapp.com/multilines",
    startData: [],
    contactData: [], 
    selected:[],
    addresses:""
  },//end state 
  mutations: {
    setData(state, payload) {
      state.startData = payload;
      //console.log('Store.setData data: '+ state.startData );
    },//end setData
    setContactData(state, payload) {
      state.contactData = payload;
      //console.log('Store.setData data: '+ state.startData );
    },
    setSelected(state, payload) {
      state.selected = payload;
      console.log('Store.selected data: ', state.selected );
    },//end setData
    setAddresses(state, payload) {
      console.log('Store.address data 1: ', payload );
      state.addresses = payload;
      console.log('Store.address data 2: ', state.addresses );
    },//end setData
  },//end mutations
  actions: {
    async getData({ state, commit }) {
      //alert("Store.getData: ");
      try {
          let response = await axios.get(`${state.dataURL}`);
          console.log("store - getData:  ", response.data );
          commit('setData', response.data);
      } catch (error) {
          alert('Data Load error: ' + error);
      }
    },//end getData
    async getContacts({ state, commit }) {
      //alert("Store.getContacts: ");
      try {
          let response = await axios.get(`${state.contactsURL}`);
          console.log("store - contactData:  ", response.data );
          commit('setContactData', response.data);
      } catch (error) {
          alert('setContactData - Data Load error: ' + error);
      }
    },
    getAddresses(context, data ){
      //alert("store - getAddresses: "+ data[0] );
      //data = data.split(',');
      data.map(item =>{
        console.log("store.getAddresses address data: ", item );
      })
      console.log("getAddresses set data: ", typeof(data) );
      console.log("getAddresses set data: ", data[1] );
      context.commit('setAddresses', data[0])
    }
  },// end actions
  getters: {
    chartData (state) {
      return state.startData;
    }
  }
})//end export

