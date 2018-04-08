<template>
  <div class="pd-15">

    <div class="search-field mb-20">
      <el-input v-model="userNum" placeholder="请输入学号" :clearable=true  style="margin-right:20px"></el-input>

      <el-button type="primary" @click="searchCheck">搜索</el-button>
    </div>


    <div class="fxC">
      <table class="fx-tab">
        <tr>
          <th>区域</th>
          <th>寝室</th>
          <th>名字</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in tableData" :key="item.id">
          <td>{{item.region}}</td>
          <td>{{item.room}}</td>
          <td>{{item.user}}</td>
          <td>{{item.checkTime}}</td>
          <td>删除</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'checkDel',
    data() {
      return {
        userNum: '',
        tableData: [{
          room: '502',
          region: 'A',
          user: '李四',
          checkTime: '2016-05-09',

          id: '1',
        }],
      }
    },
    methods: {
      searchCheck: function () {
        this.currentPage = 1,
          console.log(this.regionValue, this.floorValue)
      },
    }
  }

</script>
<style>


</style>
