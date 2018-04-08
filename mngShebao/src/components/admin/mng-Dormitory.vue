<template>
  <div class="pd-15">
    <div class="search-field">
      <el-select v-model="regionValue"  placeholder="请选择">
        <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="floorValue" placeholder="请选择">
        <el-option v-for="item in floorOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="caseValue"  placeholder="请选择">
        <el-option v-for="item in caseOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-button type="primary" class="h-40">查看</el-button>
    </div>

    <div>
      <ul class="fx">

        <li class="dor-li" v-for="item in dormInfo" :key="item.number">
          <h3>{{item.number}}</h3>
          <div>{{item.state}}</div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dormitory',
    data() {
      return {
        regionValue: '1',
        floorValue: '1',
        caseValue: '1',
        regionOptions: this.Public.regionData[this.Public.regionType],
        floorOptions: this.Public.floorData[this.Public.floorType],
        caseOptions: [{
          value: '1',
          label: '在住情况'
        }, {
          value: '2',
          label: '离校情况'
        }],

        dormInfo: [{
            number: 'A101',
            state: '1'
          },
          {
            number: 'A102',
            state: '1'
          }
        ]
      }
    }
  }

</script>
<style scoped>
  
  .dor-li {
    list-style-type: none;
    width: 60px;
    height: 60px;
    margin: 10px 8px 0 0;
    border: 1px solid #dcdfe6;
    border-radius: 3px;
  }

  .dor-li h3 {
    margin-top: 10px;
  }

  .fx {
    text-align: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-end;
  }

</style>
