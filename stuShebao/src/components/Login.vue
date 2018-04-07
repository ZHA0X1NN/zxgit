<template>
  <div class="login-bg">
    <header class="login-h" style="backgroundImage: url('./static/img/login.png');" :style="{ height: bodyHeight + 'px' }">
    </header>
    <main class="login-m">
      <input type="number" v-model.trim="loginInfo.userId" @focus="focus()" @blur="noFocus()" class="inp login-inp" placeholder="学号">
      <input type="password" v-model.trim="loginInfo.password" @focus="focus()" @blur="noFocus()" class="inp login-inp" placeholder="密码">
      <button class="inp login-btn" @click="checked()">
        登录</button>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginInfo: {
          userId: '',
          password: ''
        },
        bodyHeight: 260,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      if(localStorage.getItem('token')){
         this.$router.push({ path: '/home' })
      }

    },
    methods: {
      focus(event) {
        this.bodyHeight = 160;
      },
      noFocus() {
        this.bodyHeight = 260;
      },
      checked() {
        if (this.loginInfo.userId === '') {
          this.$zxAlert({
            alertMsg: '学号不能为空！',
            type: 'error'
          })
        } else if (this.loginInfo.userId.length !== 10) {
          this.$zxAlert({
            alertMsg: `学号为十位！但你填了${this.loginInfo.userId.length }位`,
            type: 'error'
          })
        } else if (this.loginInfo.password === '') {
          this.$zxAlert({
            alertMsg: '密码不能为空！',
            type: 'error'
          })
        } else if (this.loginInfo.password.length < 6 || this.loginInfo.password.length > 10) {
          this.$zxAlert({
            alertMsg: `密码6-10位！但你填了${this.loginInfo.password.length}位`,
            type: 'error'
          })
        } else {
          // this.$http({
          //     method: 'post',
          //     url: 'http://localhost/index/Index/queryAll',
          //     data: JSON.stringify(this.loginInfo)
          //   }).then((response)=> {
          //     console.log(1111);
          localStorage.setItem('token','1111')
          this.$zxAlert({
            alertMsg: '登录成功',
            type: 'success',
          })
          this.$router.push({ path: '/home/list' })
          //   })
          //   .catch((error)=> {
          //     console.log(2222);
          //   });
        }

      }
    }


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-h {
    transition: height ease-out 0.5s;
    height: 260px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: #c5edf5;
  }

  .login-m {
    width: 100%;
    height: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inp {
    display: block;
    outline: none;
    letter-spacing: 1px;
    border: none;
    width: 70%;
    font-size: 18px;
  }

  .login-inp {
    height: 30px;
    margin-top: 20px;
    background-color: transparent;
    border-bottom: 1px solid #bdbdbd;
    color: #525252;
  }

  .login-btn {
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    background-color: #00acff;
  }

</style>

