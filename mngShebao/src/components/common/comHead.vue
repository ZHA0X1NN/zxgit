<template>
  <div class="comhead">
    <el-row>

      <el-col :span="4" :xs="4" class="hidden-sm-and-up">
        <button class="menuBtn" @click="isCollapse = !isCollapse">菜单</button>
        <el-collapse-transition>
          <div class="headMenu" v-show="isCollapse">
            <sidebar v-on:ListenCollapse="Collapse"></sidebar>
          </div>
        </el-collapse-transition>
      </el-col>


      <el-col :span="5" :xs="10">
        <span>宿舍信息平台</span>
      </el-col>

      <el-col :span="10" class="hidden-xs-only" :xs="10">
        <span style="color:#409eff"> ___ </span>
      </el-col>

      <el-col :span="2" :offset="6" :xs="3">
        <template>
          <el-button type="text" @click="open2">退出</el-button>
        </template>
      </el-col>

    </el-row>
  </div>
</template>
<script>
  import sidebar from '../common/sidebar'
  export default {
    name: 'comHead',
    components: {
      sidebar
    },
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      Collapse: function (data) {
        this.isCollapse = data;
      },
      open2() {
        this.$confirm('确定退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('token');
          this.$router.push('/')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {   
        });
      }
    }
  }

</script>

<style>
  .comhead {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0px;
    z-index: 50;
    background-color: #409eff;
    font-size: 22px;
    line-height: 60px;
    font-weight: 600;
    color: white;
  }

  .menuBtn {
    background-color: #409eff;
    border: 2px solid whitesmoke;
    border-radius: 4px;
    color: whitesmoke;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
  }

  .headMenu {
    width: 240px;
    position: absolute;
    z-index: 20;
  }

  .el-button--text{
    color: aliceblue;
    font-size: 16px;
    font-weight: 600;
  }

</style>
