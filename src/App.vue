<template>
  <div>
    <TheHeader />
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import TheSection from './components/TheSection.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheMain,
    TheSection,
    TheFooter,
    RouterView,
    TheHeader
  }
}
</script>