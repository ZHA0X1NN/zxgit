<template>
  <div class="main">
    <div class="newsBox">
      <div class="newsHead">
        宿舍楼信息
      </div>
      <div class="newsMain">
        <div class="newsContent">
          <span>宿舍楼：</span>
          <span>东六</span>
        </div>
        <div class="newsContent">
          <span>寝室数：</span>
          <span>156</span>
        </div>
        <div class="newsContent">
          <span>在住人数：</span>
          <span>600</span>
        </div>
        <div class="newsContent">
          <span>宿舍楼：</span>
          <span>东六</span>
        </div>
        <div class="newsContent">
          <span>宿舍楼：</span>
          <span>东六</span>
        </div>
      </div>
    </div>

    <!-- <div class="newsBox">
      <div class="newsHead">
        宿舍公告
      </div>
      <div class="newsMain">
        <div class="newsContent">
          <span>宿舍明天停水</span>
        </div>
        <div class="newsContent">
          <span>宿舍明天停电</span>
        </div>
        <div class="newsContent">
          <span>宿舍明天停水</span>
        </div>
        <div class="newsContent">
          <span>宿舍明天停电</span>
        </div>
        <div class="newsContent">
          <span>宿舍明天停水</span>
        </div>
 
      </div>
    </div> -->

    <div class="newsBox">
      <div class="newsHead">
        宿舍管理员信息
      </div>
      <div class="newsMain">
        <div class="newsContent">
          <span>张一:</span>
          <span>1521514181</span>
        </div>
        <div class="newsContent">
          <span>张二:</span>
          <span>1521514181</span>
        </div>
        <div class="newsContent">
          <span>张三:</span>
          <span>1521514181</span>
        </div>
        <div class="newsContent">
          <span>张四:</span>
          <span>1521514181</span>
        </div>
        <div class="newsContent">
          <span>张五:</span>
          <span>1521514181</span>
        </div>
      </div>
    </div>





  </div>
</template>
<script>
  export default {
    name: "home"
  };

</script>

<style>
  .main {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    align-items: center;
  }

  .newsBox {
    width: 300px;
    height: 300px;
    border: 2px solid #409eff;
    margin: 20px;
    border-radius: 5px;
  }

  .newsHead {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 2px solid #409eff;
    text-align: center;
    background-color: #409eff;
    color: white;
  }

  .newsMain {
    padding: 10px 10px 0px 10px;
  }

  .newsContent {
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    display: block;
    background-color: #ecf5ff;
    padding: 0 5px;
    overflow: hidden;
  }

  @media screen and (max-width: 910px) {
    .main {
      flex-direction: column;
      justify-content: center;
    }
  }

</style>
