<template>
  <nav class="navbar navbar-expand-lg bg">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Registrarse</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mt-1 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" aria-current="page" href="#">HOME</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/download">
              <a class="nav-link" aria-current="page" href="#">DOWNLOADS</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/init">
              <a class="nav-link" aria-current="page" href="#">SIGN IN</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/donation">
              <a class="nav-link" aria-current="page" href="#">DONATION</a>
            </router-link>
          </li>
          <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
        </ul>
        <!-- <form class="d-flex" role="search">
          </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
body {
  font-family: 8-Bit Madness;
  font-weight: bold !important;
}
</style>

<style scoped>
.bg,
.bg a {
  background: black;
  color: #d3b681;
}
.navbar-toggler {
  background: white !important;
}
.navbar-expand-lg .navbar-nav {
  transform: translate(115%, 0px);
}
</style>
