<!--  -->
<template>
  <transition name="pay">
    <div class="pay" v-if="isshow">
      <div class="shield"></div>
      <div class="firme">
        <div class="firme-head">
          支付
          <div class="firme-close"></div>
        </div>
        <div class="firme-info">
          <p>信息：{{info.detail}}</p>
          <p>金额：{{info.money}}元</p>
        </div>
        <ul class="firme-main">
          <li :class="[payType===0?'alipay':'']" @click="changeType(0)" style="backgroundImage:url('./static/img/alipay.png')">支付宝</li>
          <li :class="[payType===1?'wepay':'']" @click="changeType(1)" style="backgroundImage:url('./static/img/wepay.png')">微信</li>
        </ul>

        <div class="firme-confirm">
          <button @click="close()" class="btn closeBtn">取消</button>
          <button class=" btn confirmBtn">确定</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'pay',
    data() {
      return {
        alertMsg: '',
        isshow: false,
        payType: 0,
        info: {
          detail: '',
          money: 0
        }
      }
    },
    mounted() {
      this.isshow = true;
    },
    methods: {
      close() {
        this.isshow = false;
      },
      changeType(type) {
        this.payType = type;
      }
    }
  }

</script>
<style scoped>
  .pay-enter,
  .pay-leave-to {
    opacity: 0;
  }

  .pay-enter-active,
  .pay-leave-active {
    transition: all ease 0.3s;
  }

  .pay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .shield {
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: 1000;
    opacity: 0.7;
  }

  .firme {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 75%;
    height: 260px;
    margin: auto;
    background: white;
    border-radius: 5px;
  }

  .firme-head {
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
    border-bottom: 1px solid #929292;
  }

  .firme-info p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }

  .firme-main {
    height: 120px;
    width: 100%;
    display: flex;
    background-color: #cdcdcd;
  }

  .firme-main li {
    width: 50%;
    line-height: 180px;
    text-align: center;
    background-position: center 25px;
    background-repeat: no-repeat;
    background-size: 50px;
    color: white;
  }

  .firme-main li:first-child {
    border-right: 1px solid white;
  }

  .alipay {

    background-color: #00aaee;
  }

  .wepay {
    background-color: #20b920;
  }

  .firme-confirm {
    position: absolute;
    height: 40px;
    bottom: 0px;
    width: 100%;
    display: flex;
  }

  .btn {
    width: 50%;
    height: 100%;
    border: none;
    background-color: white;
  }

  button:focus {
    outline: none;
  }

  .closeBtn {
    border-bottom-left-radius: 5px;
    border-right: 1px solid #929292;
  }

  .confirmBtn {
    border-bottom-right-radius: 5px;
  }

</style>
