<template>
  <div>
    <topbar v-bind:title="title" style="background:#3ad89f"></topbar>
    <main class="list-main">
      <ul v-if="hasRecord" class="list-ul">
        <li v-for="item in checkList" :key="item.checkTime" class="list-li">
          <p>{{item.dormitory}}</p>
          <p>{{item.checkTime}}</p>
          <span>{{item.healthRank}}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'health',
    data() {
      return {
        title: '卫生',
        hasRecord: true,
        checkList: [{
          dormitory: 'A526',
          checkTime: '2018-3-19 22:30',
          healthRank: 'A'
        }, {
          dormitory: 'A526',
          checkTime: '2018-3-19 22:31',
          healthRank: 'C'
        }, {
          dormitory: 'A526',
          checkTime: '2018-3-19 22:32',
          healthRank: 'B'
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
    background-color: #3ad89f;
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    background-color: #3ad89f;
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
