<template>
  <div class="content">
    <div class="login">
      <div class="formulario">
        <md-field>
          <label>Usuário</label>
          <md-input class="dd" v-model="form.user"></md-input>
        </md-field>
        <md-field>
          <label>Senha</label>
          <md-input v-model="form.password" type="password"></md-input>
        </md-field>
        <div class="p-fluid">
          <div class="p-field">
            <Button label="Acessar"/>
          </div>
        </div>
      </div>
    </div>
      <vue-particles class="particles" color="#dedede"></vue-particles>
  </div>
</template>

<script src="./login.js">
</script>

<style lang="scss" scoped>
.particles{
  height: 100%;
  width: 100%;
}
.content{
  height: 100vh;
  width: 100vw;
  display: flex;
}
.login{
  border-radius: 13px;
  box-shadow: 1px 1px 1px rgb(51, 51, 51);
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #184e68 0%,#57ca85 100%);
}
.formulario{
  width: 85%;
  color: aliceblue;
}
.dd{
  color: aliceblue;
}

@media screen and (max-width: 600px) {
  .login{
    width: 70%;
  }
}
</style>
