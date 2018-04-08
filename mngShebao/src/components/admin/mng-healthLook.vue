<template>
  <div class="pd-15">
    <div class="search-field mb-20">
      <el-select v-model="regionValue" class="search-min" :disabled="looking" placeholder="请选择">
        <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="floorValue" class="search-min" :disabled="looking" placeholder="请选择">
        <el-option v-for="item in floorOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-button type="primary" :disabled='looking' @click="starLook">开始检查</el-button>

    </div>
    <transition name="el-fade-in-linear">
      <div class="fxC" v-show="isShow">
        <div class="input-table">
          <div class="table-titel-max" v-if="regionValue ==1">
            A{{dorNum}}
          </div>
          <div class="table-titel-max" v-else>
            B{{dorNum}}
          </div>
          <div>
            <ul class="rankBoxs">
              <li :class="{green:'1' === selectRank}" @click="selected('1')">A</li>
              <li :class="{blue:'2' === selectRank}" @click="selected('2')">B</li>
              <li :class="{yellow:'3' === selectRank}" @click="selected('3')">C</li>
              <li :class="{red:'4' === selectRank}" @click="selected('4')">D</li>
            </ul>
          </div>

          <div class="WEbtn">
            <el-button @click="closeLook">结束检查</el-button>
            <el-button type="primary" @click="nextLook" class="Btn">确定，下一个</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'healthLook',
    data() {
      return {
        regionValue: '1',
        floorValue: '1',
        regionOptions: this.Public.regionData[this.Public.regionType],
        floorOptions: this.Public.floorData[this.Public.floorType],

        looking: false,
        isShow: false,


        selectRank:'1',
        dorNum: '',
      }
    },
    methods: {
      starLook: function () {
        this.dorNum = this.floorValue * 100 + 1;

        this.$message({
          message: '开始检查卫生',
          type: 'success'
        });
        this.isShow = true;
        this.looking = true;
      },

      nextLook: function () {
        let params = {
          rank: this.selectRank,
          dorNum: this.dorNum,
          region: this.regionValue
        }
        if (this.dorNum === this.floorValue * 100 + this.Public.regionNum) {
          this.$message.error('本楼层已检查完毕！');
        } else {
          this.dorNum += 1;
        }
      },


      closeLook: function () {
        this.$message({
          message: '结束检查',
          type: 'success'
        });
        this.isShow = false;
        this.looking = false;
      },


      selected: function (selectRank) {
          this.selectRank=selectRank;
      }
    }
  }

</script>
<style scoped>

  .el-button {
    height: 40px;
  }


</style>
