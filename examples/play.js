import Vue from 'vue'
import EtComponent from 'main/index'
import App from './play/index'
import '../packages/theme-chalk/index.scss'

console.log('EtComponent', EtComponent)
Vue.use(EtComponent)

/* eslint-disable */
new Vue({
    render: h => h(App)
}).$mount('#app')