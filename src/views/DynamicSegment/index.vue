<template>
<div class=''>
  <h1>dynamicSegment</h1>
  <h2>打印动态路由参数</h2>
  <p>{{ $route.params.id }}</p>
</div>
</template>

<script>
export default {
  name: 'DynamicSegment',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('from', from)
      console.log('to', to)
    }
  },
  data () {
    return {}
  },
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log('from', from)
    console.log('to', to)
  }
}
</script>

<style scoped>

</style>
