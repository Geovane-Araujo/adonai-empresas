<template>
  <div class="lala">
    <loading v-model="isAtive" loader="spinner" color="#000" :can-cancel="true" :is-full-page="fullPage"/>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  props: {
    isAtive: {
      type: Boolean
    }
  },
  components: {
    loading: VueLoading
  }
}
</script>

<style lang="scss" scoped>
.lala{
  height: 100vh;
  width: 100vw;
  z-index: 50;
}
</style>
