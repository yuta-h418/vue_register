import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

  const firebaseConfig = {
    apiKey: "AIzaSyBK4mU7_lnHquaunlgwtRuTjod1VSpNh7U",
    authDomain: "register-demo-89a93.firebaseapp.com",
    databaseURL: "https://register-demo-89a93.firebaseio.com",
    projectId: "register-demo-89a93",
    storageBucket: "register-demo-89a93.appspot.com",
    messagingSenderId: "301857052318",
    appId: "1:301857052318:web:49b2517ccc0911fa65cd8f"
  };
  firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
