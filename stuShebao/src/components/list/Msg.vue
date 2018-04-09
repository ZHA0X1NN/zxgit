<template>
  <div>
    <topbar v-bind:title="title" style="background:#6d56fa"></topbar>
    <main class="list-main">
      <ul v-if="hasRecord" class="list-ul">
        <li v-for="item in msgList" :key="item.msgTime" class="list-li">
          <p>{{item.msgContent}}</p>
          <p>{{item.msgTime}}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'msg',
    data() {
      return {
        title: '宿舍楼公告',
        hasRecord: true,
        msgList: [{
          msgContent: '宿舍楼4月5号停水',
          msgTime: '2018-3-19 22:30',
        },{
          msgContent: '宿舍楼4月5号停电',
          msgTime: '2018-3-19 22:31',
        },{
          msgContent: '宿舍楼4月5号关门',
          msgTime: '2018-3-19 22:32',
        }]
      }
    }
  }

</script>

<style scoped>
  .list-main {
    min-height: 100%;
    padding: 70px 10px 0;
    box-sizing: border-box;
    background-color: #6d56fa;
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    background-color: #6d56fa;
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

  .list-li span {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 22px;
  }

</style>
