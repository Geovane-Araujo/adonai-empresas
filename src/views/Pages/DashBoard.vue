<template>
  <div>
    <div class="container content-card">
      <card styless="colorcard" total="48M" description="Total Empresas"/>
      <card styless="colorcard2" total="48M" description="Total Empresas Ativas"/>
      <card styless="colorcard3" total="48M" description="Total Empresas Inativas"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.content-card{
  height: 100px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
}
</style>
