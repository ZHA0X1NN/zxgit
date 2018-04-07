<template>
  <div>
    <topbar v-bind:title="title"></topbar>
    <main class="mine-main">
      <ul class="mine-ul">
        <li>
          <span class="tagName">姓名</span>{{userInfo.userName}}</li>
        <li>
          <span class="tagName">性别</span>{{userInfo.sex}}</li>
        <li>
          <span class="tagName">学院</span>{{userInfo.academy}}
        </li>
        <li>
          <span class="tagName">专业</span>{{userInfo.major}}
        </li>
        <li>
          <span class="tagName">班级</span>{{userInfo.class}}
        </li>
        <li>
          <span class="tagName">宿舍</span>{{userInfo.doemitory}}
        </li>
        <li>
          <span class="tagName">床号</span>{{userInfo.bedNum}}号床
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'mine-info',
    data() {
      return {
        title: '个人信息',
        userInfo: {
          userName: '赵新',
          sex: '男',
          academy: '计算机科学与技术',
          major: '计算机科学与技术',
          class: '计科1401',
          doemitory: 'A526',
          bedNum:'1'
        }
      }
    }
  }

</script>
<style scoped>
  .mine-main {
    padding-top: 70px;
    height: 100%;
    box-sizing: border-box;
    background: #f5f5f5;
  }

  .mine-ul {
    text-align: right;
    background: white;
  }

  .mine-ul li {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 10px;
  }
  .tagName {
    float: left;
  }

</style>
