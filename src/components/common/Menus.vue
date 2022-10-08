<template>
  <div class="menus">

    <el-aside width="240px">

      <el-menu router="" default-active="2" class="el-menu-vertical-demo" background-color="#5578b5" text-color="#fff"
        active-text-color="#ffd04b">

        <template  v-for="(item,index) in menus">
          <el-submenu :index="index+''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="(child,index) in item.children" :key="index">

              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{child.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>


      </el-menu>

    </el-aside>

  </div>
</template>
  
<script>
export default {
  data() {
    return {
      menus: []
    }
  },
  created() {
    //console.log('this.$router.options.routes', ...this.$router.options.routes);

    //this.menus=this.$router.options.routes//不要用原数据，要拷贝一份
    this.menus = [...this.$router.options.routes]
    /* this.menus.forEach(item => {
      console.log(item);
    }); */
  },
  methods: {

  }
}
</script>
  
<style lang="scss" scoped>
.menus {
  .el-aside {
    height: 100%;

    .el-menu {
      height: 100%;

      .fa {
        margin: 10px;
        font-size: 20px;

        
      }
    }

    .el-submenu .el-submenu-item {
      min-width: 0;
    }
  }

}
</style>