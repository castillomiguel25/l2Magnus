<template>
  <div>
    <footer class="footer cursor">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center mt-3">L2MAGNUS.com</div>
        </div>
        <div class="row">
          <div class="col text-center">
            <i class="fab fa-discord icons"></i>
            <i class="fab fa-instagram icons"></i>
            <i class="fab fa-facebook-square icons"></i>
            <i class="fab fa-whatsapp icons"></i>
            <i class="fab fa-linkedin icons"></i>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {}
  }
}
</script>

<style scoped>
.footer {
  background: black;
  color: #d3b681;
}
.spaced {
  height: 300px;
}

.icons{
    margin-left: 10px;
    cursor: pointer !important;
}

.cursor{
    cursor: url('./components/icons/img-4.png'), auto  !important;
}
</style>
