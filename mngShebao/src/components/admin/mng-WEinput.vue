<template>
  <div class="pd-15">
    <div class="search-field mb-20">
      <el-select v-model="regionValue" class="search-min" placeholder="请选择">
        <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="floorValue" class="search-min" placeholder="请选择">
        <el-option v-for="item in floorOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <!-- <el-select v-model="caseValue" class="search-min" placeholder="请选择">
        <el-option v-for="item in caseOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select> -->

      <el-select v-model="mouthValue" class="search-min" placeholder="请选择">
        <el-option v-for="item in mouthOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-button type="primary">开始</el-button>

    </div>

    <div class="fxC">
      <div class="input-table">
        <div class="table-titel-max" v-if="regionValue ==1">
          A{{dorNum}}
        </div>
        <div class="table-titel-max" v-else>
          B{{dorNum}}
        </div>
        <label class="WEinput">电量：
          <input v-model="inputWE" type="number" maxlength="5" placeholder="本月电量" />
        </label>
        <div class="WEbtn">
          <el-button round>清空</el-button>
          <el-button type="primary" class="yellowBtn" @click="subWE" round>确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WEinput',
    data() {
      return {
        regionValue: '1',
        floorValue: '1',
        caseValue: '1',
        mouthValue: '1',
        inputWE: '',
        dorNum:'',
        regionOptions: this.Public.regionData[this.Public.regionType],
        floorOptions: this.Public.floorData[this.Public.floorType],
        // caseOptions: [{
        //   value: '1',
        //   label: '电费'
        // }, {
        //   value: '2',
        //   label: '水费'
        // }],
        mouthOptions: this.Public.dateMouth
      }
    },
    methods:{
      subWE:function(){

      }
    }
  }

</script>
<style scoped>
  .table-titel-max {
    height: 100px;
    line-height: 100px;
    font-size: 50px;
    font-weight: 600;
    border-radius: 4px;
    background-color: #ffff2a;
  }

  .WEinput {
    height: 100px;
    line-height: 100px;
    margin: 20px 0;
    font-size: 24px;
    display: block;
  }

  .WEinput input {
    border: none;
    height: 50px;
    width: 150px;
    font-size: 30px;
    text-align: center;
    border-bottom: 4px solid #ffff2a;
  }

  .input-table{
    height: 325px;
    margin-top: 30px;
  }
  .WEbtn{
    height: 60px;
    line-height: 60px;
  }

  .yellowBtn{
     background-color: #ffff2a;
     border-color: #ffff2a;
     color: #3e3939;
     margin-left: 50px;
  }

  .el-button{
    height: 40px;
  }

</style>
