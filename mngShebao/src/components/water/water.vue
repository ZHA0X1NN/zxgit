<template>
  <div>
    <div class="comhead">
      <span>宿舍信息平台-送水</span>
      <el-button class="back" type="text" @click="open2">退出</el-button>
    </div>
    <div class="main">
      <div class="search-field">
        <el-select v-model="regionValue" placeholder="请选择">
          <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

        <el-button type="primary" class="h-40">查看</el-button>
      </div>

      <div class="fxC">
        <table class="fx-tab">
          <tr>
            <th>区域</th>
            <th>寝室</th>
            <th>类型</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in tableData" :key="item.id">
            <td>{{item.region}}</td>
            <td>{{item.room}}</td>
            <td>{{item.waterType}}</td>
            <td>{{item.number}}</td>
            <td @click="confirm(index)">确认</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'waterList',
    data() {
      return {
        regionValue: '1',
        regionOptions: this.Public.regionData[this.Public.regionType],
        tableData: [{
          room: '502',
          region: 'A',
          waterType: '纯净水',
          number: '1',
          id: '1',
        }, {
          room: '504',
          region: 'A',
          waterType: '矿泉水',
          number: '3',
          id: '2',
        }, {
          room: '505',
          region: 'A',
          waterType: '矿泉水',
          number: '2',
          id: '3',
        }],
      }
    },
    methods: {
      open2() {
        this.$confirm('确定退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('account');
          this.$router.push('/')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {});
      },
      confirm(index) {
        this.$confirm('确定已送水吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '送水成功!'
          });
        }).catch(() => {});
      }
    }
  }

</script>
<style scoped>
  .comhead {
    text-align: left;
    padding: 0 10px;
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

  .back {
    position: absolute;
    right: 30px;
    height: 100%;
    color: aliceblue;
    font-size: 16px;
    font-weight: 600;
  }

  .main {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  .fxC {
    width: 100%;
  }

  .search-field {
    width: 100%;
  }

</style>
