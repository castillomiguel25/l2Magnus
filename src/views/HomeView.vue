<template>
  <div>
    <TheMain />
    <the-section />
    <the-footer />
  </div>
</template>

<script>
import TheMain from '@/components/TheMain.vue'
import TheSection from '@/components/TheSection.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {
    TheMain,
    TheSection,
    TheFooter
  }
}
</script>
