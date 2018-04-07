import Vue from 'vue'
import Pay from './src/main.vue'

Pay.confirm = function (options) {
  let pay = Vue.extend(Pay)
  let component = new pay({
    data: options
  }).$mount();
  document.body.appendChild(component.$el)
}


export default Pay
