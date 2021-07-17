<template>
  <div>
      <el-input v-model="test" placeholder="请输入"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: ''
    }
  },
  watch: {
    test: function(val, oldVal) {
      console.log('输入框被输入了·')
    }
  }
}
</script>

<style>

</style>