<template>
  <div>

    <el-row type="flex" class="row-bg " justify="center">
      <el-col :span="24" class="login-h">
        <h2>西南科技大学</h2>
      </el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">

      <el-col :span="6" :xs='20'>

        <el-form class="login-form" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <h2 style="margin:20px 0;">宿舍信息平台</h2>
          <el-input class="login-i" v-model="formLabelAlign.number" placeholder="工号"></el-input>

          <el-input class="login-i" type="password" v-model="formLabelAlign.password" placeholder="密码"></el-input>

          <el-select class="login-i" v-model="formLabelAlign.account" placeholder="请选择账户类型">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

          <div class="login-btn">
            <el-button class="loginBtn" type="primary" @click="submitForm()">登录</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>


  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          number: '',
          password: '',
          account: '1'
        },
        options: [{
          value: '1',
          label: '管理员'
        }, {
          value: '2',
          label: '送水'
        }],
      }
    },
    methods: {
      submitForm() {
        if (this.formLabelAlign.number.replace(/\s+/g, "") === '') {
          this.formLabelAlign.number = '';
          this.$message.error('账号不能为空！');
        } else if (this.formLabelAlign.number.replace(/\s+/g, "").length !== 10) {
          this.$message.error('账号为10位！');
        } else if (this.formLabelAlign.password.replace(/\s+/g, "") === '') {
          this.formLabelAlign.password = '';
          this.$message.error('密码不能为空！');
        } else if (this.formLabelAlign.password.replace(/\s+/g, "").length > 10) {
          this.formLabelAlign.password = '';
          this.$message.error('密码最长10位！');
        } else {
          this.commit()
        }

      },
      commit() {
        console.log(this.formLabelAlign.account)
        var querystring = require('querystring');
        let params = {
          number: this.formLabelAlign.number
        }
        // this.$ajax.post('http://localhost/index/Index/find', querystring.stringify(params))
        //   .then(response => {
        //     if (response.data.code === 200) {
        //       sessionStorage.setItem('token', response.data.data[0].number);
        //       this.$message({
        //         message: '登录成功！',
        //         type: 'success'
        //       });
        sessionStorage.setItem('token', 111);
        sessionStorage.setItem('account', this.formLabelAlign.account);
        if (this.formLabelAlign.account === '1') {
          this.$router.push('/index')
        } else {
          this.$router.push('/water')
        }

        //   }else{
        //     this.$message.error('错误！')
        //   }

        // })
        // .catch(err => {
        //    this.$message.error('网络错误！')
        // });
        //  "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }
  }

</script>

<style>
  .login-form {
    margin: 60px 0;
    padding: 20px 10px;
    border: 2px solid #409eff;
    border-radius: 10px;
  }

  .el-select {
    width: 100%;
  }

  .login-btn {
    margin: 10px 0;
  }
  .loginBtn{
    width: 100%;
  }

  .login-h {
    text-align: left;
    padding-left: 20px;
    background-color: #409eff;
    color: whitesmoke;
    height: 60px;
    line-height: 60px;
  }

  .login-i {
    margin: 10px 0;
  }

</style>
