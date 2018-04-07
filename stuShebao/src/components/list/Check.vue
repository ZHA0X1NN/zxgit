<template>
  <div>
    <topbar :title="title" style="background:#fa5856"></topbar>
    <main class="list-main">
      <ul v-if="hasRecord" class="list-ul">
        <li v-for="(item,index) in checkList" :key="item.checkTime" :class="[item.removeCheck!==0 ?'xiao':'disxiao','list-li']">
          <p>{{item.dormitory}}</p>
          <p>{{item.name}}</p>
          <p>{{item.checkTime}}</p>
          <span>{{removeCheck(index)}}</span>
        </li>
      </ul>
      <p v-else>请继续保持，暂无晚未归记录</p>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'check',
    data() {
      return {
        title: '晚未归',
        hasRecord: true,
        checkList: [{
          name: '帅英杰',
          dormitory: 'A526',
          checkTime: '2018-3-19 22:30',
          removeCheck: 1
        }, {
          name: '帅英杰',
          dormitory: 'A526',
          checkTime: '2018-3-19 22:31',
          removeCheck: 1
        }, {
          name: '帅英杰',
          dormitory: 'A526',
          checkTime: '2018-3-19 22:32',
          removeCheck: 0
        }]
      }
    },
    methods: {
      removeCheck(index) {
        if (this.checkList[index].removeCheck === 0) {
          return '未销';
        } else {
          return '已销';
        }
      }
    }
  }

</script>

<style scoped>
  .list-main {
    min-height: 100%;
    padding: 70px 10px 0;
    box-sizing: border-box;
    background-color: #fa5856;
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    background-color: #fa5856;
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
    right: 10px;
    top: 35px;
  }

  .disxiao {
    color: #333333;
  }

  .xiao {
    color: #bbbbbb;
  }

</style>
