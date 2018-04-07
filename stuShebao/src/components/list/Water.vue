<template>
  <div>
    <topbar v-bind:title="title"></topbar>
    <main class="list-main">
      <ul class="list-ul">
        <li class="list-li">
          <p class="name">纯净水</p>
          <p>￥5 / 桶</p>
          <span class="count">
            <div class="symbol jian" v-show="num.chunNum>0" @click="jian(0)" style="backgroundImage:url('./static/img/jian.png')"></div>
            <div class="number" v-show="num.chunNum>0">{{num.chunNum}}</div>
            <div class="symbol jia" @click="jia(0)" style="backgroundImage:url('./static/img/jia.png')"></div>
          </span>
        </li>
        <li class="list-li">
          <p class="name">矿泉水</p>
          <p>￥10 / 桶</p>
          <span class="count">
            <div class="symbol jian" v-show="num.kuangNum>0" @click="jian(1)" style="backgroundImage:url('./static/img/jian.png')"></div>
            <div class="number" v-show="num.kuangNum>0">{{num.kuangNum}}</div>
            <div class="symbol jia" @click="jia(1)" style="backgroundImage:url('./static/img/jia.png')"></div>
          </span>
        </li>
      </ul>
    </main>
    <transition name="buy">
      <footer v-if="isBuy">
        <div class="shopcar" style="backgroundImage:url('./static/img/shopcar.png')"></div>
        <div class="money">￥{{money}}</div>
        <button class="payBtn" @click="pay()">去付款</button>
      </footer>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'water',
    data() {
      return {
        title: '送水',
        isBuy: false,
        num: {
          chunNum: 0,
          kuangNum: 0,
        },
        money: 0,
      }
    },
    methods: {
      pay() {
        let info={
          detail:'',
          money:this.money
        };
        if(this.num.chunNum!=0){
          info.detail=`纯净水*${this.num.chunNum},`;
        }
        if(this.num.kuangNum!=0){
          info.detail=info.detail+`矿泉水*${this.num.kuangNum}`;
        }
        this.$zxPay({info:info});
      },
      jian(type) {
        if (type == 0) {
          this.num.chunNum = this.minNum(this.num.chunNum);
        } else {
          this.num.kuangNum = this.minNum(this.num.kuangNum);
        }
        this.sum()
      },
      jia(type) {
        if (this.maxNum()) {
          if (type == 0) {
            this.num.chunNum++;
          } else {
            this.num.kuangNum++;
          }
          this.sum()
        }
      },
      minNum(num) {
        if (num-- <= 0) {
          return 0;
        } else {
          return num--;
        }
      },
      maxNum() {
        if ((this.num.kuangNum + this.num.chunNum) >= 5) {
          this.$zxAlert({
            alertMsg: '一次最多购买5桶！',
            type: 'error'
          })
          return false
        } else {
          return true
        }
      },
      sum() {
        this.money = this.num.kuangNum * 10 + this.num.chunNum * 5;
      }
    },
    watch: {
      money: function (val) {
        if (val > 0) {
          this.isBuy = true
        } else {
          this.isBuy = false
        }
      }
    }
  }

</script>

<style scoped>
  .list-main {
    height: 100%;
    padding: 70px 10px 0;
    box-sizing: border-box;
    background-color: #37b9ff;
  }

  .list-ul {
    display: flex;
    flex-direction: column;
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

  .count {
    display: flex;
    position: absolute;

    height: 20px;
    right: 15px;
    top: 25px;
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

  .name {
    font-size: 20px;
  }

  .symbol {
    width: 20px;
    height: 20px;
    background: center no-repeat;
    background-size: 14px;
    border-radius: 50%;
  }

  .jia {
    background-color: #fed700;
    border: 1px solid white;
  }

  .jian {
    border: 1px solid #cdcdcd;
  }

  .number {
    width: 30px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }

  .buy-enter-active,
  .buy-leave-active {
    transition: all ease .3s;
  }

  .buy-enter,
  .buy-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }

  footer {
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0px;
    background-color: #404040;
    display: flex;
  }

  .shopcar {
    position: absolute;
    left: 0px;
    height: 100%;
    width: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px;
  }

  .money {
    width: 80px;
    color: white;
    font-size: 24px;
    height: 100%;
    position: absolute;
    left: 80px;
    line-height: 60px;
  }

  .payBtn {
    position: absolute;
    right: 0px;
    height: 100%;
    width: 100px;
    border: none;
    background-color: #fed700;
    color: #333333;
    font-size: 15px;
    letter-spacing: 2px;
  }

</style>
