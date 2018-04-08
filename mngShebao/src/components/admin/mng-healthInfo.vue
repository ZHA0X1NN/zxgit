<template>
  <div class="pd-15">
    <div class="search-field mb-20">
      <el-select v-model="regionValue" class="search-min" placeholder="请选择">
        <el-option :key="'0'" :label="'全部区域'" :value="'0'">
        </el-option>
        <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="floorValue" class="search-min" placeholder="请选择">
        <el-option :key="'0'" :label="'全部楼层'" :value="'0'">
        </el-option>
        <el-option v-for="item in floorOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-button type="primary" @click="searchLook">搜索</el-button>
    </div>


    <div class="fxC">
      <table class="fx-tab">
        <tr>
          <th>编号</th>
          <th>区域</th>
          <th>寝室</th>
          <th>卫生等级</th>
          <th>时间</th>
        </tr>
        <tr v-for="item in tableData" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.region}}</td>
          <td>{{item.room}}</td>
          <td>{{item.healthRank}}</td>
          <td>{{item.creat_time}}</td>
        </tr>
      </table>

        <el-pagination background layout="prev, pager, next" :current-page=currentPage @current-change='changPage' :total="50" :small='true' next-text='下页' prev-text='上页'>
      </el-pagination>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'healthInfo',
    data() {
      return {
        regionValue: '0',
        floorValue: '0',
        regionOptions: this.Public.regionData[this.Public.regionType],
        floorOptions: this.Public.floorData[this.Public.floorType],

        rank: '1',
        dorNum: '',
        currentPage:1,

        tableData: [{
          region: 'A',
          creat_time: '2016-05-02',
          room: '502',
          healthRank: 'A',
          id: '1',
        }]
      }
    },
    methods: {
      searchLook: function () {
        this.currentPage=1,
        console.log(this.regionValue, this.floorValue)
      },
      changPage:function(currentPage){
        this.currentPage=currentPage;
        console.log(this.currentPage)
      }
    }
  }

</script>
<style scoped>

</style>
