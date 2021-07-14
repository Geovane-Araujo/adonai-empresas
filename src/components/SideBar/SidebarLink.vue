<template>
  <div class="content">
    <div class="header" @click="onSelectRoute">
      <img src="./icons/dashboard.png" alt="">
      <h3>{{ name }}</h3>
    </div>
    <SideBarLinkItem class="iten-side" :sub="sub" v-show="isColapesd"/>
  </div>
</template>

<script>
import SideBarLinkItem from './SidebarLinkItem.vue'
export default {
  name: 'SideBarLink',
  data () {
    return {
      isColapesd: false
    }
  },
  props: {
    route: {
      type: String
    },
    name: {
      type: String
    },
    icon: {
      type: String
    },
    sub: {
      type: Array
    }
  },
  methods: {
    onSelectRoute () {
      if (this.route !== '') {
        this.$router.push({ name: this.name })
      } else {
        if (this.isColapesd) {
          this.isColapesd = false
        } else {
          this.isColapesd = true
        }
      }
    }
  },
  components: {
    SideBarLinkItem
  }
}
</script>

<style lang="scss" scoped>
.iten-side{
  transition: height .4s;
}
i{
  color: #000000;
}
.header{
  height: 40px;
  background-color: rgba($color: #000000, $alpha: 0.0);
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  padding: 10px;
  cursor: pointer;
  h3{
    margin-left: 10px;
    margin-top: 7px;
    font-size: 1.2rem;
  }
}
.btn-itens{

}
.header:hover{
  background:linear-gradient(135deg, #184e68 0%,#57ca85 100%);
}
@media screen and (max-width: 600px) {
  .header{
    h3{
      visibility: hidden;
    }
    width: 14vw;
  }
}
</style>
