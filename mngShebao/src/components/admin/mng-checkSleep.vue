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

      <el-button type="primary" :disabled='looking' @click="starCheck">开始查寝</el-button>

    </div>
    <transition name="el-fade-in-linear">
      <div class="fxC" v-show="looking">
        <div class="input-table">
          <div class="table-titel-max" v-if="regionValue ==1">
            A{{dorNum}}
          </div>
          <div class="table-titel-max" v-else>
            B{{dorNum}}
          </div>
          <div>
            <ul class="rankBoxs">
              <li :class="{red:1===selectAry[index]}" v-for="(item,index) in dataRoom" :key="item.bedNum"  @click="selected(index)">
                <div class="room roomNum">{{item.bedNum}}号床</div>
                <div class="room">{{item.userName}}</div>
              </li>
            </ul>
          </div>

          <div class="WEbtn">
            <el-button @click="closeCheck">结束检查</el-button>
            <el-button type="primary" @click="nextCheck" class="Btn">确定，下一个</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'checkSleep',
    data() {
      return {
        regionValue: '1',
        floorValue: '1',
        regionOptions: this.Public.regionData[this.Public.regionType],
        floorOptions: this.Public.floorData[this.Public.floorType],

        looking: false,

        dataRoom:[{
            bedNum:1,
            userName:'宗哥'
        },{
            bedNum:2,
            userName:'宗哥'
        },{
            bedNum:3,
            userName:'宗哥'
        },{
            bedNum:4,
            userName:'宗哥'
        }],

        selectAry:[],
        dorNum: '',
      }
    },
    created: function (){
        this.selectAry.length=this.dataRoom.length;
        this.selectAry.fill(0);
        console.log(this.selectAry);
    },
    methods: {
      starCheck: function () {
        this.dorNum = this.floorValue * 100 + 1;

        this.$message({
          message: '开始查寝',
          type: 'success'
        });
        this.looking = true;
      },

      nextCheck: function () {
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
        this.selectAry.fill(0);
      },


      closeCheck: function () {
        this.$message({
          message: '结束查寝',
          type: 'success'
        });
        this.looking = false;
        this.selectAry.fill(0);
      },


      selected: function (index) {
          if(this.selectAry[index]===1){
            this.$set(this.selectAry, index, 0);
          }else{
            this.$set(this.selectAry, index, 1);
          }
      }
    }
  }

</script>
<style scoped>
  .input-table {
    margin-top: 10px;
  }

  .rankBoxs li {
    margin: 8px 10px;
  }

  .el-button {
    height: 40px;
  }
  .rankBoxs{
    padding: 5px 25px;
  }

  .room{
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
  }

  /* .roomNum */

</style>
