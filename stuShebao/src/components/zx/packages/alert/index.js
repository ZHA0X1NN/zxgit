import Vue from 'vue'
import Alert from './src/main.vue'

Alert.installMessage = function (options) {
  options = options || {};
  if (typeof options === 'string') {
    options.alertMsg = options.alertMsg
  }

  let alert = Vue.extend(Alert);
  let component = new alert({
    data: options
  }).$mount()
  document.body.appendChild(component.$el)
}

export default Alert;
