<template>
  <div class="header">
    <el-header >
      <div class="title">管理系统</div>
      <div>{{name}}</div>
    </el-header>
  </div>
</template>

<script>import { getToken } from '@/utils/tokenDispose'
export default {
  created() {
    //console.log('头部用户名改为localstorage中的username');
    this.name = getToken('username')
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .el-header {
    color: #FFF;
    background: #2578b5;
    line-height: 60px;
    display: flex;

    justify-content:space-between ;
    .title {
      width: 230px;
      font-size: 24px;
    }
  }
}
</style>