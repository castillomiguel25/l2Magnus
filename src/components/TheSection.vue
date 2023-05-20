<template>
  <div class="container-fluid img-container">
    <div class="row">
      <div class="col-5 px-5">
        <h3 class="mt-5 text-senction">ENCUENTRANOS EN DISCORD!</h3>
        <p class="parrafo-section">
          Pongase al día con todas las noticias y eventos del servidor de juegos de L2Magnus.com
          Siempre es importante mantenerse informado sobre los principales aspectos del servidor y
          tener la posibilidad de conectarse con otros jugadores y unirse a clanes., en nuestro
          servidor de Discord también se organizan eventos exclusivos, donde podrá participar en
          emocionantes desafíos y ganar premios increíbles. No se pierda esta oportunidad y únase a
          nuestra comunidad en Discord hoy mismo. ¡Esperamos verle allí!
        </p>
        <a href="#" class="btn-join btn-lineage mx-auto">Join Now</a>
      </div>
      <div class="col-6 mr-5">
        <img class="img img-new" src="./icons/Img-3.png" alt="Descripción de la imagen" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSection'
}
</script>

<style>
.img-container {
  background-image: url('./icons/bg-section.jpg');
  background-size: cover;
  height: 600px;
  transition: background-position 3s ease-in-out;
}

.text-senction {
  color: #d3b681;
  font-size: 24px;
  line-height: 64px;
  font-weight: bold;
}

.parrafo-section {
  color: #d3b681;
}

.img-container:hover {
  background-position: center 70%;
}

.img-new {
  height: 600px;
  width: 700px;
}
.btn-join {
  position: absolute;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}
</style>
