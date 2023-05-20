<template>
  <div class="container-fluid img-Donation font-Donation">
    <div class="row justify-content-center">
      <div class="col-lg-4 mt-5 text-center">
       <h2>Donaciones</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.img-Donation {
  background-image: url('../components/icons/IconsBg.jpg');
  background-size: cover;
  height: 600px;
  position: relative;
  filter: grayscale(20%);
}

.font-Donation h2, p{
    color:  #d3b681 !important;
}
</style>
