<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menus />
      <el-container>
        <el-main>Main
          <Breadcrumb></Breadcrumb>
          <div class="cont">
            <router-view />
          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Menus from '@/components/common/Menus.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
export default {
  name: 'HelloWorld',
  components: {
    Header,
    Footer,
    Menus,
    Breadcrumb
  },
  props: {

  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0;

    .cont {
      margin: 20px
    }
  }
}
</style>
