<template>
  <header>
    <div class="back" style="backgroundImage:url('./static/img/back.png')" @click="goBack()"></div>
    {{title}}
  </header>
</template>

<script>
  export default {
    name: 'topbar',
    props: ['title'],
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
  }

</script>
<style scoped>
  header {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    line-height: 60px;
    color: white;
    background-color: #37b9ff;
    font-size: 20px;
    font-weight: 600;
    z-index: 1000;
  }
  .back{
      position: absolute;
      height: 60px;
      width: 60px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 28px;
  }

</style>
