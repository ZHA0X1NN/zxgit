import Alert from './packages/alert/index'
import Topbar from './packages/topbar/index'
import Pay from './packages/pay/index'

const install = function(Vue) {
    
    Vue.component(Alert.name, Alert)
    Vue.component(Topbar.name, Topbar)
    Vue.component(Pay.name, Pay)
    
    Vue.prototype.$zxAlert = Alert.installMessage;
    Vue.prototype.$zxPay = Pay.confirm;
}

export default install;