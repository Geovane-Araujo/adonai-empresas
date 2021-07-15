<template>
  <div class="contennt">
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="usr">
          <b-avatar src="https://placekitten.com/300/300" size="5rem"></b-avatar>
          <div class="user-data">
            <h5>Geovane Araújo</h5>
            <h6>SYSDBA</h6>
          </div>
        </div>
      </div>
      <div class="sidebar-content">
        <div v-for="item in sidebar.items" :key="item.name">
          <SideBarLink :colapesd="false" :sub="item.sub" :name="item.name" :route="item.route" :icon="item.icon"/>
        </div>
      </div>
      <div class="sidebar-footer">
      </div>
    </div>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script src="./Sidebar.js">
</script>
<style lang="scss" scoped>
$isDesktop: 15vw;
$isMobile: 50px;

.router{
  padding: 7px;
  margin: 7px;
  margin-left: 0px;
  width: calc(100vw - 15vw);
  border-radius: 5px;
  overflow: auto;
  max-width: 100vw;
  max-height: 98vh;
}
.contennt{
  display: flex;
}
.sidebar{
  border-radius: 0px 20px 20px 0px;
  position: relative;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  max-width: 100%;
  width: $isDesktop;
  box-shadow: 10px;
  background:linear-gradient(135deg, #184e68 0%,#57ca85 100%);
}
.sidebar-header{
  height: 20vh;
  display: flex;
  .usr{
    width: 100%;
    display: flex;
    align-items: center;
    .user-data{
      margin-left: 10px;
      h6{
        font-size: 11px;
      }
    }
  }
}
.sidebar-footer{
  height: 7vh;
  width: $isDesktop;
  bottom: 0;
  position: absolute;
}
.sidebar-content{
  height: 73vh;
  width: $isDesktop;
}
@media screen and (max-width: 600px) {
  .sidebar{
    width: $isMobile;
    overflow: visible;
  }
  .sidebar-header{
    height: 0px;
    visibility: hidden;
  }
  .sidebar-footer{
    width: $isMobile;
    visibility: hidden;
  }
  .sidebar-content{
    height: 100vh;
  }
}
</style>
