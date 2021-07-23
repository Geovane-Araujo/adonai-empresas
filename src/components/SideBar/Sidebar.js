import SideBarLink from './SidebarLink.vue'
export default {
  data () {
    return {
      iscolapsed: false,
      form: {
        cnae: ''
      }
    }
  },
  props: {
    sidebar: {
      type: Object
    }
  },
  components: {
    SideBarLink
  }
}
