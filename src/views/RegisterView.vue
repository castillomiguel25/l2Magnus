<template>
  <div class="container-fluid img-background font-register">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <form class="mt-5">
          <h2 class="text-center mb-4">Registro de jugador</h2>
          <div class="form-group">
            <label for="username"><p>Nombre de usuario</p></label>
            <input type="text" id="username" v-model="username" class="form-control" placeholder="Ingrese su nombre de usuario">
          </div>
          <div class="form-group">
            <label for="email"><p>Correo electrónico</p></label>
            <input type="email" id="email" v-model="email" class="form-control" placeholder="Ingrese su correo electrónico">
          </div>
          <div class="form-group">
            <label for="password"><p>Contraseña</p></label>
            <input type="password" id="password" v-model="password" class="form-control" placeholder="Ingrese su contraseña">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" id="remember" v-model="remember" class="form-check-input">
            <label for="remember" class="form-check-label"><p>Recuérdame</p></label>
          </div>
          <div class="text-center">
            <button type="submit" class="btn-register" @click.prevent="submitForm">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      remember: false
    };
  },
  methods: {
    submitForm() {
      // Lógica para enviar el formulario o realizar validaciones
      console.log('Formulario enviado');
    }
  }
};
</script>

<style scoped>
.img-background {
  background-image: url('../components/icons/IconsBg.jpg');
  background-size: cover;
  height: 600px;
  position: relative;
  filter: grayscale(20%);
}

.font-register p, h2{
color:  #d3b681 !important;
}

.btn-register {
  background-color: #1c1c1c;
  color: #d3b681;
  border: 2px solid #a49171;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
</style>
