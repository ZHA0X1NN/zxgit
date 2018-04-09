<template>
  <div class="main">

    <div class="item check-item" style="backgroundImage:url('./static/img/check.png')">
      <router-link class="item-a" to="/check" style="backgroundImage:url('./static/img/list.png')">
        晚未归
        <p class="intro">你的被查寝记录</p>
      </router-link>
    </div>
    <div class="item comeBack-item" style="backgroundImage:url('./static/img/comeBack.png')">
      <router-link class="item-a" to="/comeBack" style="backgroundImage:url('./static/img/list.png')">
        离返校
        <p class="intro">节假日离返校登记</p>
      </router-link>
    </div>
    <div class="item ele-item" style="backgroundImage:url('./static/img/electric.png')">
      <router-link class="item-a" to="/ele" style="backgroundImage:url('./static/img/list.png')">
        电费
        <p class="intro">电费缴费 / 查看</p>
      </router-link>

    </div>
    <div class="item health-item" style="backgroundImage:url('./static/img/health.png')">
      <router-link class="item-a" to="/health" style="backgroundImage:url('./static/img/list.png')">
        卫生
        <p class="intro">卫生记录</p>
      </router-link>

    </div>
    <div class="item water-item" style="backgroundImage:url('./static/img/water.png')">
      <router-link class="item-a" to="/water" style="backgroundImage:url('./static/img/list.png')">
        送水
        <p class="intro">饮用水服务</p>
      </router-link>

    </div>
    <div class="item msg-item" style="backgroundImage:url('./static/img/msg.png')">
      <router-link class="item-a" to="/msg" style="backgroundImage:url('./static/img/list.png')">
        公告
        <p class="intro">宿舍楼最近信息</p>
      </router-link>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'home-list',
  }

</script>

<style scoped>
  .main {
    padding: 0 10px;
  }

  .item:nth-child(1) {
    margin-top: 0px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .item {
    height: 70px;
    line-height: 50px;
    margin-top: 10px;
    background-repeat: no-repeat;
    background-position: 40px;
    background-size: 40px 40px;
  }

  .check-item {
    background-color: #fa5856;
  }
  .comeBack-item{
    background-color: #ff7c41;
  }

  .ele-item {
    background-color: #fed700;
  }

  .health-item {
    background-color: #3ad89f;
  }

  .water-item {
    background-color: #37b9ff;
  }
  .msg-item{
    background-color: #6d56fa;
  }

  .item-a {
    height: 100%;
    padding-left: 120px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 4px;
    z-index: 100;
    background-position: 95%;
    background-repeat: no-repeat;
    background-size: 20px;
  }

  .intro {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 100;
    position: relative;
    top: -10px;
    color: white;
    letter-spacing: 0;
  }

</style>
