<template>
  <div class="content">
    <div class="header" @click="onSelectRoute">
      <img src="./icons/dashboard.png" alt="">
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarLink',
  props: {
    route: {
      type: String
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
i{
  color: black;
}
.content{
  display: flex;
}
.header{
  height: 40px;
  background-color: rgba($color: #000000, $alpha: 0.0);
  display: flex;
  align-items: center;
  width: 100vw;
  color: white;
  padding: 10px;
  cursor: pointer;
  h3{
    margin-left: 10px;
    margin-top: 7px;
    font-size: 1.2rem;
  }
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
