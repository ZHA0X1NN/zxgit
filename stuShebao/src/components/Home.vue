<template>
  <div class="home-page">
    <header>舍宝</header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div @click="change(0)">
        <router-link class="foot-a" to="/home/list" replace>
          <div v-if="isclick===0" class="webicon" style="backgroundImage:url('./static/img/ishome.png')"></div>
          <div v-else class="webicon" style="backgroundImage:url('./static/img/home.png')"></div>
          宿舍
        </router-link>
      </div>
      <div @click="change(1)">
        <router-link class="foot-a" to="/home/mine" replace>
          <div v-if="isclick===1" class="webicon" style="backgroundImage:url('./static/img/isperson.png')"></div>
          <div v-else class="webicon" style="backgroundImage:url('./static/img/person.png')"></div>
          我的
        </router-link>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        isclick: 0,
      }
    },
    created(){
      let path=this.$route.path
      if(path.indexOf('mine')!=-1){
         this.isclick = 1;
      }else{
         this.isclick = 0;
      }
    },
    methods: {
      change(type) {
        if (type === 0) {
          this.isclick = 0;
        } else {
          this.isclick = 1;
        }
      }
    }
  }

</script>

<style scoped>
  .home-page {
    background-color: #f5f5f5;
  }

  header,
  footer {
    position: fixed;
    height: 60px;
    width: 100%;
    line-height: 60px;
  }

  header {
    top: 0px;
    text-align: center;
    color: white;
    background-color: #37b9ff;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 5px;
  }

  footer {
    display: flex;
    justify-content: space-around;
    bottom: 0;
    border-top: 1px solid #e4e4e4;
    background-color: white;
  }


  main {
    display: flex;
    flex-direction: column;
    padding: 70px 0px;

  }

  .foot-a {
    color: #828282;
    font-size: 14px;
    height: 100%;
    line-height: 18px;
    background-repeat: no-repeat;
    background-position: 2px 5px;
    background-size: 32px;
  }

  .router-link-active {
    color: #21a9e2;
  }

  .webicon {
    background: no-repeat center;
    background-size: 33px;
    width: 40px;
    height: 40px;
  }

</style>
