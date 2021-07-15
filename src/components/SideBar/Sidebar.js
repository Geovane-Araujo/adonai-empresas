import SideBarLink from './SidebarLink.vue'
export default {
  data () {
    return {
      iscolapsed: false
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
