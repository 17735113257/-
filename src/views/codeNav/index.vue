<template>
<div class=''>
  <h1>编程式导航</h1>
  <el-row><el-col :span="24"><el-button @click='test1'>push不带参数 (格式-字符串 ) this.$router.push('codeNav1')</el-button></el-col></el-row>
  <el-row><el-col :span="24"><el-button @click='test2'>push不带参数 (格式-对象 ) this.$router.push({ path: 'codeNav1')</el-button></el-col></el-row>
  <el-row><el-col :span="24"><el-button @click="test3">push不带params (格式-命名的路由)   this.$router.push({ name: 'codeNav1' })</el-button></el-col></el-row>
  <el-row><el-col :span="24"><el-button @click="test5">push带query参数 (格式-命名的路由) this.$router.push({ name: 'codeNav1',query: { userId: 1 } }) </el-button></el-col></el-row>
  <h1>以下这俩个方法需要问助教</h1>
  <el-row><el-col :span="24"><el-button @click="test4">push带params参数 (格式-命名的路由) this.$router.push({ name: 'codeNav1',params: { userId: 1 } }) </el-button></el-col></el-row>
  <el-row><el-col :span="24"><el-button @click="test6">测试params出现在url的位置 this.$router.push({ path: `codeNav1/${userId}` })</el-button></el-col></el-row>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    test1 () {
      // 这里可以带/ 可以不带 默认自己会加上 表示从根路径下开始
      this.$router.push('codeNav1')
    },
    test2 () {
      this.$router.push({ path: 'codeNav1' })
    },
    test3 () {
      this.$router.push({ name: 'codeNav1' })
    },
    test4 () {
      this.$router.push({ name: 'codeNav1', params: { userId: 1 } })
    },
    test5 () {
      this.$router.push({ name: 'codeNav1', query: { userId: 1 } })
    },
    test6 () {
      const userId = 123
      this.$router.push({ path: `codeNav1/${userId}` })
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 5px;
  }
</style>
