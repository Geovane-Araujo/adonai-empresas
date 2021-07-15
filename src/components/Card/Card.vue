<template>
  <div v-bind:class="'card-totals ' + styless">
    dhfghg
  </div>
</template>

<script>
export default {
  props: {
    styless: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.card-totals{
  margin-left: 10px;
  width: 25%;
  height: 100%;
  border-radius: 13px;
  padding: 10px;
}
</style>
