<template>
  <div class="content">
    <div class="itens" v-for="item in sub" :key="item.name">
      <div class="iten-content">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarLinkItem',
  props: {
    sub: {
      type: Array
    },
    name: {
      type: String
    },
    icon: {
      type: String
    }
  },
  methods: {
    onSelectRoute () {
      if (this.route !== '') {
        this.$router.push({ name: this.name })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.itens{
  transition: height .4s;
  height: 35px;
  background-color: rgba($color: #184e68, $alpha: 0.3);
  display: flex;
}
.iten-content{
  height: 100%;
  display: flex;
  margin-left: 60px;
  align-items: center;
  cursor: pointer;
  transition: height 4s;
}
</style>
