<template>
  <div>
    <topbar v-bind:title="title" style="background:#fed700"></topbar>
    <main class="list-main">
      <ul v-if="hasRecord" class="list-ul">
        <li v-for="(item,index) in eleList" :key="item.eleId" :class="[item.removeCheck!==0 ?'xiao':'disxiao','list-li']" :style="{width:ele(index)}">
          <p style="fontSize:20px">￥{{item.eleFee}}</p>
          <p>{{item.checkTime}}</p>
          <button v-if="item.elePay===0" @click="pay(index)">缴费</button>
        </li>
      </ul>
      <p v-else>请继续保持，暂无晚未归记录</p>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'ele',
    data() {
      return {
        title: '电费',
        hasRecord: true,
        highEle: 220,
        maxWirth: '',

        eleList: [{
          eleId:'1',
          eleFee: '100',
          checkTime: '2018-5-19',
          elePay: 0
        }, {
          eleId:'2',
          eleFee: '200',
          checkTime: '2018-4-19',
          elePay: 1
        }, {
          eleId:'3',
          eleFee: '150',
          checkTime: '2018-3-19',
          elePay: 1
        }, {
          eleId:'4',
          eleFee: '170',
          checkTime: '2018-2-19',
          elePay: 1
        }, {
          eleId:'5',
          eleFee: '156',
          checkTime: '2018-1-19',
          elePay: 1
        }]
      }
    },
    created() {
      this.maxWirth = document.body.clientWidth - 40;
      this.maxEle()
    },
    methods: {
      ele(index) {
        let wid;
        wid = parseInt((this.eleList[index].eleFee / this.highEle) * this.maxWirth);
        return `${wid}px`;
      },
      pay(eleId) {
        console.log(eleId)
        let info={
          detail:`${this.eleList[eleId].checkTime}电费`,
          money:this.eleList[eleId].eleFee
        };
        this.$zxPay({info:info});
      },
      maxEle() {
        let maxele=this.eleList[0].eleFee;
        let length=this.eleList.length-1;
        for (let index = 0; index < length; index++) {
          let j=index+1;
          if (this.eleList[j].eleFee > maxele) {
            maxele = this.eleList[j].eleFee;
          }
        }
        this.highEle = maxele;
      }
    }
  }

</script>

<style scoped>
  .list-main {
    min-height: 100%;
    padding: 70px 10px 0;
    box-sizing: border-box;
    background-color: #fed700;
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    background-color: #fed700;
  }

  .list-li {
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    text-align: left;
    line-height: 25px;
    position: relative;
    margin-bottom: 10px;
  }

  .list-li button {
    position: absolute;
    right: 10px;
    top: 20px;
    padding: 5px;
    background: white;
    border: none;
    font-size: 18px;
  }

  button:focus {
    outline: none;
  }

</style>
