<template>
  <div>
    <topbar v-bind:title="title"></topbar>
    <main class="mine-main">
      <ul class="mine-ul">
        <li>
          <span class="tagName">原来密码：</span>
          <input type="password" v-model="password.oldpass" class="mine-ipt">
        </li>
        <li>
          <span class="tagName">新的密码：</span>
          <input type="password" v-model="password.newpass" class="mine-ipt">
        </li>
        <li>
          <span class="tagName">确认密码：</span>
          <input type="password" v-model="password.confrim" class="mine-ipt">
        </li>
        <li>
          <span style="color:#adabab">密码为6-10位,数字和字母</span>
        </li>
        <li>
          <button class="mine-btn" @click="check()">确定</button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'mine-info',
    data() {
      return {
        title: '修改密码',
        password: {
          oldpass: '',
          newpass: '',
          confrim: '',
        }
      }
    },
    methods: {
      check() {
        if (!this.checkRule(this.password.oldpass)) {
          this.$zxAlert({
            alertMsg: '原密码格式不对！',
            type: 'error'
          })
        } else {
          if (!this.checkRule(this.password.newpass) || !this.checkRule(this.password.confrim)) {
            this.$zxAlert({
              alertMsg: '新密码格式不对！',
              type: 'error'
            })
          } else {
            if (!this.checkSame(this.password.newpass, this.password.confrim)) {
              this.$zxAlert({
                alertMsg: '两次密码不一样！',
                type: 'error'
              })
            } else {
              this.$zxAlert({
                alertMsg: '修改成功！',
                type: 'success'
              })
              this.password.oldpass = ''
              this.password.newpass = ''
              this.password.confrim = ''
            }
          }
        }
      },
      checkSame(one, two) {
        if (one === two) {
          return true;
        } else {
          return false;
        }
      },
      checkRule(one) {
        const rule = /^[a-zA-Z0-9]{6,10}$/;
        if (rule.test(one)) {
          return true;
        } else {
          return false;
        }
      }

    }
  }

</script>
<style scoped>
  .mine-main {
    padding-top: 70px;
    height: 100%;
    box-sizing: border-box;
    background: #f5f5f5;
  }

  .mine-ul {
    text-align: left;
    background: white;
  }

  .mine-ul li {
    height: 50px;
    line-height: 50px;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .tagName {
    flex-shrink: 0;
  }

  .mine-ipt {
    height: 40px;
    font-size: 20px;
    border: none;
    letter-spacing: 5px;
    padding-left: 5px;
    border-bottom: 1px solid #dcdcdc;
    width: 80%;

  }

  .mine-btn {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 18px;
    background: #37b9ff;
  }

  input,
  button:focus {
    outline: none;
  }

</style>
