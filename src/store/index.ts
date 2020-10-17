import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import { firebaseConfig } from '@/firebaseConfig';

Vue.use(Vuex);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const { storage } = firebase;
const { auth } = firebase;

export default new Vuex.Store({
  state: {
    db,
    firebase,
    storage,
    auth,
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    authenticated(state) {
      return !!state.user;
    },
  },
});
