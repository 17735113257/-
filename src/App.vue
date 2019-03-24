<template>
<div class='app'>
  <el-container>
    <el-aside>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="lightgoldenrodyellow"
        text-color="#333"
        active-text-color="#78ff4b">
          <el-submenu index="1">
            <template slot="title">1-1动态路由参数</template>
            <el-menu-item index="1-1"><router-link to = "/dynamicSegment/a">参数:a</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to = "/dynamicSegment/b">参数:b</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">1-2嵌套路由</template>
            <el-menu-item index="2-1"><router-link to = "/NestedRoutes">嵌套路由</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">1-3编程式的导航</template>
            <el-menu-item index="3-1"><router-link to = "/codeNav">编程式的导航</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">1-4命名路由</template>
            <el-menu-item index="4-1"><router-link :to = "{ name: 'nameRouter' }">命名路由</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">1-5命名视图</template>
            <el-menu-item index="5-1"><router-link :to = "{ name: 'nameView' }">命名视图(根路由)</router-link></el-menu-item>
            <el-menu-item index="5-2"><router-link :to = "{ name: 'nameView3' }">命名视图(子路由)</router-link></el-menu-item>
          </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
      <router-view name = "a"></router-view>
      <router-view name = "b"></router-view>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .app{
    height: 100%;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    width: 200px;
    height: 100%;
    background: lightgoldenrodyellow;
  }
  .el-main {
    background: lightgray;
  }
</style>
