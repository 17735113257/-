<template>
<div class=''>
  <h1>我是命名路由(必须用动态的属性)</h1>
  <h1><router-link :to = "{ name: 'nameRouter' }">命名路由</router-link></h1>
</div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
