<template>
  <div class="image-container container-fluid">
    <div class="row text-center">
      <div class="col-3 px-5 mt-5">
        <img class="img-presentation" src="./icons/Img-2.webp" alt="Descripción de la imagen" />
      </div>
      <div class="col-8 mt-3 text-center move px-5">
        <h1 class="image-text">L2 MAGNUS</h1>
        <p class="text spaceds">¡Prepárate para la guerra!</p>
        <a href="#" class="btn-init btn-lineage">Join Now</a>
        <a href="/register" class="btn-init btn-lineage">Sign Up</a>
        <br>
        <img class="img" src="./icons/Img-4.png" alt="Descripción de la imagen" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderVue from '@/components/TheHeader.vue'
export default {
  name: 'MiComponente',
  components: {
    TheHeaderVue
  },
  data() {
    return {}
  }
}
</script>
<style>
.image-container {
  background-image: url('./icons/Iconsbg.jpg');
  background-size: cover;
  height: 600px;
  position: relative;
  filter: grayscale(20%);
  transition: background-position 5s ease-in-out;
}
.image-container:hover {
  background-position: center 50%;
}

.image-text {
  color: #d3b681;
  font-size: 54px;
  line-height: 64px;
  font-weight: bold;
}

.text {
  color: #d3b681;
  font-size: 27px;
  line-height: 32px;
  font-weight: bold;
}

.move {
  transform: translate(-14%);
}

.spaceds{
  margin-bottom: 35px;
}

.btn-init {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  margin-left: 20px;
}

.btn-lineage {
  background-color: #1c1c1c;
  color: #d3b681;
  border: 2px solid #a49171;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.btn-lineage:hover {
  background-color: black;
  color: #fff;
}

.img-4 {
  height: 100%;
}

.img-presentation{
  height: 545px;
  width: 320px;
}
</style>
