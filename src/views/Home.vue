<template>
  <div class="home">
    <sidebar :sidebar="menu"/>
  </div>
</template>

<script>
import Sidebar from '../components/SideBar/Sidebar.vue'
export default {
  name: 'Home',
  data () {
    return {
      menu: {
        items: [
          {
            name: 'Visão Geral',
            icon: 'dash',
            route: 'DashBoard'
          }
        ]
      }
    }
  },
  components: {
    Sidebar
  }
}
</script>
