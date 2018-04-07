<template>
  <transition name="zx-fade" :duration="1000">
    <div :class="[
      type ? `zx-alert-${type}` :'', 
      'zx-alert']" v-if="isShow">
      {{alertMsg}}
    </div>
  </transition>

</template>

<script>

  export default {
    name: 'zx-alert',
    data() {
      return {
        type: 'info',
        alertMsg: '123123',
        showTime: 2000,
        isShow: false,
      }
    },
    mounted() {
      this.isShow = true;
      this.close();
    },
    methods: {
      close() {
        setTimeout(() => {
          this.isShow = false;
        }, this.showTime);
      }
    }
  }

</script>

<style scoped>
  .zx-fade-enter-active,
  .zx-fade-leave-active {
    top: -20px!important;
    transition: all 0.6s;
  }

  .zx-fade-enter-to {
    transform: translateY(35px);
    opacity: 1;
  }

  .zx-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }

  .zx-alert-success {
    background-color: #d5f7c3;
    color: #42af0c;
  }

  .zx-alert-error {
    background-color: #ffcccc;
    color: #ec2323;
  }

  .zx-alert-info {
    background-color: #dfdff9;
    color: #646975;
  }

  .zx-alert {
    border-radius: 4px;
    z-index: 1000;
    width: 80%;
    height: auto;
    padding: 6px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 15px;
    text-align: center;
    opacity: 1;
  }

</style>
