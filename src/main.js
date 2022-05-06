import Vue from 'vue'
import App from './App.vue'
import {HHH} from './assets/Hunhe1.js'      //引用了一个JS，
Vue.config.productionTip = false,
Vue.mixin(HHH)                              //加入了这个HHH的混合
new Vue({
  render: h => h(App),
}).$mount('#app')
