<template>
  <div>
    <topbar v-bind:title="title"></topbar>
    <main class="mine-main">
      
    </main>
  </div>
</template>

<script>
  export default {
    name: 'mine-about',
    data() {
      return {
        title: '关于我们'
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

  .mine {
    text-align: right;
    background: white;
  }

</style>
