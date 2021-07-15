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
            name: 'Dashboard',
            icon: 'dash',
            route: 'DashBoard'
          },
          {
            name: 'Cadastros',
            icon: 'dash',
            route: '',
            sub: [
              {
                name: 'Clientes',
                route: 'Atendimento'
              },
              {
                name: 'Produtos',
                route: 'Atendimento'
              }
            ]
          },
          {
            name: 'Outros Cadastros',
            icon: 'dash',
            route: '',
            sub: [
              {
                name: 'Clientes',
                route: 'Atendimento'
              },
              {
                name: 'Produtos',
                route: 'Atendimento'
              }
            ]
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
