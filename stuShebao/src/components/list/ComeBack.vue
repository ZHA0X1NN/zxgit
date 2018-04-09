<template>
  <div>
    <topbar v-bind:title="title" style="background:#ff7c41"></topbar>
    <main class="list-main">
      <ul v-if="hasRecord" class="list-ul">
        <li v-for="item in List" :key="item.type" class="list-li">
          <p>{{item.msgContent}}</p>
          <span @click="register(item.type)">登记</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'comeBack',
    data() {
      return {
        title: '离返校',
        hasRecord: true,
        List: [{
          msgContent: '离校',
          type: '1',
        }, {
          msgContent: '返校',
          type: '2',
        }]
      }
    },
    methods: {
      register(type) {
        if (type == 1) {
          this.$zxAlert({
            alertMsg: '登记成功！请按时返校，注意安全',
            type: 'success',
          })
        } else {
          this.$zxAlert({
            alertMsg: '登记失败！请重新登记',
            type: 'error',
          })
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
    background-color: #ff7c41;
  }

  .list-ul {
    display: flex;
    flex-direction: column;
    background-color: #ff7c41;
  }

  .list-li {
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    text-align: left;
    line-height: 25px;
    position: relative;
    margin-bottom: 10px;
    font-size: 22px;
  }

  .list-li span {
    position: absolute;
    right: 20px;
    top: 12px;
    font-size: 16px;
  }

</style>
