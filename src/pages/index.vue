<template>
  <div class="container">
    <div style="display: flex; height: 100%; justify-content: center; align-items: center">
      <van-button type="primary">{{ message }}</van-button> 
    </div>
  </div>
</template>

<script>
  import api from '../api'
  export default {
    name: 'index',
    data () {
      return {
        message: 'hello world'
      }
    },
    mounted () {
      console.log(api.host)
      // axios method test
      // this.$axios.get('/toolkit/region/listHotCity.do').then(data => {
      //   console.log(data)
      // })
      // vuex test
      // this.$store.commit('set_index', true)
    }
  }
</script>

<style lang="stylus">
  
</style>
