<template>
  <div class="pd-15">
    <div class="fxC">
      <table class="fx-tab">
        <tr>
          <th>编号</th>
          <th>区域</th>
          <th>寝室</th>
          <th>用电量</th>
          <th>时间</th>
        </tr>
        <tr v-for="item in tableData" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.region}}</td>
          <td>{{item.room}}</td>
          <td>{{item.dian}}</td>
          <td>{{item.creat_time}}</td>
        </tr>
      </table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'highEle',
    data() {
      return {
        tableData: [{
          region: 'A',
          creat_time: '2016-05',
          room: '502',
          dian: '200',
          id: '1',
        }]
      }
    }

  }

</script>
<style>


</style>
