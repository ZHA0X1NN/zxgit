<template>
  <div>
    <ul style="marginTop:5px">
      <li class="list" style="backgroundImage:url('./static/img/more.png')">
        <router-link class="item-a" to="/userinfo">个人信息</router-link>
      </li>
      <li class="list" style="backgroundImage:url('./static/img/more.png')">
        <router-link class="item-a" to="/changePW">修改密码</router-link>
      </li>
      <li class="list" style="backgroundImage:url('./static/img/more.png')">
        <router-link class="item-a" to="/about">关于我们</router-link>
      </li>
    </ul>
    <ul>
      <li class="list tui" @click="exit()">退出登录</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'home-mine',
    methods: {
      exit() {
        localStorage.removeItem('token');
        this.$router.push({
          path: '/'
        })
      }
    }
  }

</script>
<style scoped>
  .list {
    height: 45px;
    line-height: 45px;
    text-align: left;
    padding: 0 10px;
    background-color: white;
    border-bottom: 1px solid #dcdcdc;
    background-repeat: no-repeat;
    background-position: 96%;
    background-size: 20px;
  }

  .tui {
    border-radius: 3px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    margin-top: 20px;
    text-align: center;
    margin-top: 15px;
    box-shadow: 0px 1px 0px #cdcdcd;
    color: #656565;
  }

  .item-a {
    color:#656565;
  }

</style>
