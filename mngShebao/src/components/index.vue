<template>
  <div id="index">
    <el-row>
      <el-col>
        <comHead></comHead>
      </el-col>
    </el-row>
    <el-row style="margin-top:60px;">
      <el-col class='hidden-xs-only' :span="5">
        <sidebar></sidebar>
      </el-col>
      <el-col  :span="19" :xs="24">
        <div>
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
 import comHead from '../components/common/comHead.vue';
 import sidebar from '../components/common/sidebar.vue';
  export default {
    name: 'index',
    components:{
      comHead,sidebar
    }
  }

</script>

<style>


</style>
