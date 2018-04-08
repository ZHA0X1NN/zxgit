<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title" @click="activeName=1">
          <router-link to="/index/home">首页</router-link>
        </span>
      </el-menu-item>
      <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title" @click="activeName=2">
          <router-link to="/index/dormitory">宿舍情况</router-link>
        </span>
      </el-menu-item>


    </el-menu>
    <el-collapse accordion>
      <el-collapse-item title="电费管理">
        <!-- <div @click="activeName=3">
          <router-link to="/index/WEinput">水电费录入</router-link>
        </div> -->
        <div @click="activeName=4">
          <router-link to="/index/arrearage">欠费宿舍</router-link>
        </div>
        <div @click="activeName=5">
          <router-link to="/index/highEle">高用电量宿舍</router-link>
        </div>
      </el-collapse-item>
      <el-collapse-item title="查寝管理">
        <div @click="activeName=6">
          <router-link to="/index/checkSleep">宿舍查寝</router-link>
        </div>
        <div @click="activeName=7">
          <router-link to="/index/checkInfo">查寝记录</router-link>
        </div>
         <div @click="activeName=8">
          <router-link to="/index/checkDel">销寝</router-link>
        </div>
      </el-collapse-item>
      <el-collapse-item title="卫生管理">
        <div @click="activeName=9">
          <router-link to="/index/healthLook">检查卫生</router-link>
        </div>
        <div @click="activeName=10">
          <router-link to="/index/healthInfo">卫生记录</router-link>
        </div>

      </el-collapse-item>
    </el-collapse>




  </div>
</template>
<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        activeName: '1',
      }
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    },
    watch: {
      activeName: function () {
        this.$emit('ListenCollapse', false);
      }
    }
  }

</script>

<style>
  .sidebar {
    border-right: 2px solid #409eff;
  }

  .router-link-active {
    display: block;
    background-color: #ecf5ff;
    text-decoration: none;
    color: #409eff !important;
    font-size: 18px;
    font-weight: 600;
    border-left: 8px solid #409eff;
    /* border-bottom: 1px solid #409eff; */
  }

  .el-menu-item {
    padding: 0 !important;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    font-weight: 600;
    /* border-top: 1px solid #cecece; */
  }

  .el-collapse-item__header {
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    font-weight: 600;
    padding-left: 17px;
    color: #303133;
}

  .el-menu-item a {
    display: block;
    text-decoration: none;
  }
   .el-collapse-item__content{
     padding-bottom: 0px;
   }

  .el-collapse-item__content a {
    display: block;
    text-decoration: none;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  .el-submenu__title {
    height: 45px;
    line-height: 45px;
    border-top: 1px solid #cecece;
  }

  .el-menu-item-group__title {
    display: none;
  }

  a:link {
    color: #303133;
  }

  /* 未被访问的链接 */

  a:visited {
    color: #303133;
  }

</style>
