import SideBarLink from './SidebarLink.vue'
export default {
  data () {
    return {
      sidebar: {
        atendimento: [
          {
            name: 'Abertura',
            route: ''
          },
          {
            name: 'Fechamento',
            route: ''
          }
        ]
      }
    }
  },
  components: {
    SideBarLink
  }
}
