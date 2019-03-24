<template>
<div class=''>
  <h1>命名视图子3</h1>
  <router-link to = "/nameView3">视图4</router-link>
  <router-link to = "/nameView3/nameView5">视图5</router-link>
  <router-view></router-view>
  <router-view></router-view>

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
